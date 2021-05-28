import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {map} from "rxjs/operators";
import {Account} from "./model/account";
import {MetaData} from "./model/meta.data";
import {NgForm} from "@angular/forms";
import {ApiResponse} from "./model/api.response";
import {Subscription} from "rxjs";
import {AccountService} from "./account.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  accounts: Account[] = [];
  metaData: MetaData = new MetaData('Account-Service',
    2020, '127.0.0.0');

  branchName: string = '';
  defaultSalary: number = 1000.76;
  url: string = 'http://sw-lp10595:2020/accounts/';

  dataFound = false;

  @ViewChild('f') accountForm: NgForm;

  postSub: Subscription;


  account: Account = {
    metaData: this.metaData,
    accountHolderName: '',
    accountNumber: 0,
    branchName: '',
    outstanding: this.defaultSalary
  }

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.onGetAccount(null);
  }

  onGetAccount(accountNumber: number) {

    if ( accountNumber ) {
      const url = this.url + accountNumber;
      this.fetchByAccountNumber(url);
    } else {
      this.fetch(this.url);
    }
  }

  private fetchByAccountNumber(url: string) {
    this.accountService.fetchAccount(url)
      .subscribe(response => {
        this.accounts = [JSON.parse(response).data];
        this.dataFound = true;
      }, error => {
        console.log(error);
        this.dataFound = false;
      });
  }

  private fetch(url: string) {
    this.accountService.fetchAccount(url)
      .subscribe(response => {
        let accounts = [];
        let acc = JSON.parse(response).data;
        accounts.push(...acc);
        this.accounts = accounts;
        this.dataFound = true;
      }, error => {
        console.log(error);
        this.dataFound = false;
      });
  }

  onSubmit() {
    this.account.accountHolderName = this.accountForm.value.accountData.name;
    this.account.accountNumber = this.accountForm.value.accountData.accountNumber;
    this.account.branchName = this.accountForm.value.branch;

    this.accountService.addAccount(this.account, this.url);
    this.postSub = this.accountService.errorResponse
      .subscribe(reserror => {
        console.log(reserror);
      });
    this.accountForm.reset();
  }

  ngOnDestroy(): void {
    this.postSub.unsubscribe();
  }

}
