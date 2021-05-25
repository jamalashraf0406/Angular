import { EventEmitter} from "@angular/core";
import {LoggingService} from "./logging.service";
import {Injectable} from "@angular/core";

/**
 * Here we have used @Injectable() decorator because we are
 * going to inject LoggingService into this AccountService
 * Service reduces the redundant boiler plate code from the component.
 * */
@Injectable()
export class AccountService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {
  }

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChanged(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChanged(status);
  }
}
