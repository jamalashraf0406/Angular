import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {BehaviorSubject, Subject, throwError} from "rxjs";
import {User} from "./user.model";
import {Router} from "@angular/router";


export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localIn: string;
  registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {

  userSubject: Subject<User> = new BehaviorSubject<User>(null);
  token: string = null;

  private tokenExpirationTimer: any;

  constructor(private http: HttpClient,
              private router: Router) {
  }

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC4roHW6pZ7nPLx1qGR5xC5MfFFsGJ4WLs',
    {
              email: email,
              password: password,
              returnSecureToken: true
          }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localIn,
            resData.idToken,
            +resData.expiresIn);
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC4roHW6pZ7nPLx1qGR5xC5MfFFsGJ4WLs',
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localIn,
            resData.idToken,
            +resData.expiresIn);
        })
      );
  }

  private handleAuthentication(
    email: string, userId: string, token: string, expiresIn: number) {

    const expirationDate = new Date(
      new Date().getTime()+ (expiresIn * 1000));

    const user = new User(email, userId, token, expirationDate);
    this.userSubject.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {

    let errorMessage = "An unknown error occurred!";
    if (!errorRes.error || !errorRes.error.error) {
      throwError(errorMessage);
    }
    switch ( errorRes.error.error.message ) {
      case 'EMAIL_EXISTS':
        errorMessage = "Email is Already exists!";
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = "This email doesn't exist!";
        break;
      case 'INVALID_PASSWORD':
        errorMessage = "This password is not correct!";
    }
    return throwError(errorMessage);
  }

  logout() {
    this.userSubject.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');

    if ( this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expiration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expiration)
  }

  autoLogin() {
    const userData: {
      email: string,
      id: string,
      _token: string,
      _tokenExpirationDate: Date
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      userData._tokenExpirationDate);

    if(loadedUser.token) {
      this.userSubject.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }
}
