import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private storageKey = 'user';
  constructor(private http: HttpClient) { }

  saveUser(firstname: string): Observable<any> {
    return this.http.post<any>('https://patrimoine.harari.io/web/api/user/create', { firstname });
  }

  storeUser(userId: number): void {
    localStorage.setItem(this.storageKey, userId.toString());
  }

  getUserId(): number {
    const id = localStorage.getItem(this.storageKey);
    return Number(id || 0);
  }
}
