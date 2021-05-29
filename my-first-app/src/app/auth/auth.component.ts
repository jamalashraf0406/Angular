import {Component, ComponentFactoryResolver, OnDestroy, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";
import {AuthResponseData, AuthService} from "./auth.service";
import {Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {AlertComponent} from "../shared/alert/alert.component";
import {PlaceholderDirective} from "../shared/placeholder/placeholder.directive";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy {

  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = null

  closeSub: Subscription;

  @ViewChild(PlaceholderDirective) alertHost;

  constructor(private authService: AuthService,
              private router: Router,
              private cmpFactoryResolver: ComponentFactoryResolver) {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {
    if (!authForm.valid) {
      return;
    }
    const email = authForm.value.email;
    const password = authForm.value.password;

    let authObs: Observable<AuthResponseData>;
    this.isLoading = true;

    if ( this.isLoginMode ) {
     authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }


    authObs.subscribe(response => {
        console.log(response);
        this.isLoading = false;
        this.router.navigate(['/recipes'])
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
        this.showErrorAlert(errorMessage);
      }
    );

    authForm.reset();
  }

  onHandleError() {
    this.error = null;
  }

  // create programmatically
  private showErrorAlert(errorMessage: string) {
    //const alertCmp = new AlertComponent();
    const alertCmpFactory =
      this.cmpFactoryResolver.resolveComponentFactory(AlertComponent);

    const hostViewContainerRef = this.alertHost.viewContainerRef;

    hostViewContainerRef.clear();

    const cmpRef = hostViewContainerRef.createComponent(alertCmpFactory);
    cmpRef.instance.message = errorMessage;
    this.closeSub = cmpRef.instance.close
      .subscribe( () => {
        this.closeSub.unsubscribe();
        hostViewContainerRef.clear();
      });
  }

  ngOnDestroy() {
    if ( this.closeSub ) {
      this.closeSub.unsubscribe();
    }
  }
}