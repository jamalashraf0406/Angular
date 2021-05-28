import {Injectable} from "@angular/core";
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";
import {Account} from "./model/account";
import {ApiResponse} from "./model/api.response";
import {catchError, map, tap} from "rxjs/operators";
import {ErrorResponse} from "./model/error.response";
import {Subject, throwError} from "rxjs";

@Injectable({providedIn: 'root'})
export class AccountService {

  errorResponse: Subject<ErrorResponse> = new Subject<ErrorResponse>();
  constructor(private http: HttpClient) {
  }

  addAccount(account: Account, url: string) {
    this.http.post<ApiResponse>(url+'create', account)
      .pipe(
        map(data => {
          return JSON.stringify(data);
        })
      )
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
        this.errorResponse.next(error);
      });
  }

  public fetchAccount(url: string) {
    return this.http
      .get<ApiResponse>(url+"",{
        responseType: 'json'
      })
      .pipe(
        map(data => {
          return JSON.stringify(data);
        }), catchError( errorResponse => {
          console.log(errorResponse);
          return throwError(errorResponse);
        })
      );
  }

  private getHeaders() {

    const param = new HttpParams();
    param.append('print', 'print');
    param.append('hello', 'Hai');

    this.http.get('', {
      headers: new HttpHeaders({
        'custome-header': 'hello'
      }),
      params: param
    });
  }

  private differentResponse() {

    this.http.post('', {}, {
      observe: 'events',
      responseType: 'json'
    })
      .pipe(
        tap(event => {
          console.log(event);
          if ( event.type == HttpEventType.Response) {
            console.log(event.body);
          } else if (event.type == HttpEventType.Sent) {

          }
        })
      );
  }

}
