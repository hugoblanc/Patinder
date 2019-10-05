import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  saveUser(firstname: string): Observable<any> {
    return this.http.post('https://patrimoine.harari.io/web/api/user/create', { firstname });
  }
}