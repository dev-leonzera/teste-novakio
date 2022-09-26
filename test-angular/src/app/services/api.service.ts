import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getHello(): Observable<any> {
    return this.http.get(environment.apiHost + '/hello');
  }

  public getDatetime(): Observable<any> {
    return this.http.get(environment.apiHost + '/time');
  }

  public sendMessage(message: String): Observable<string> {

    return this.http.post<string>(environment.apiHost + '/message', {mensagem: message});
  }
}
