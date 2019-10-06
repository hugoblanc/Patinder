import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private storageKey = 'user';
  public userId: number;
  constructor(private http: HttpClient) { }

  saveUser(firstname: string): Observable<any> {
    return this.http.post('http://patrimoine.harari.io/web/api/user/create', { firstname })
      .pipe(map((data: any) => this.userId = data.user_id));
  }

  storeUser(userId: number): void {
    localStorage.setItem(this.storageKey, userId.toString());
  }

  getUserId(): number {
    const id = localStorage.getItem(this.storageKey);
    this.userId = parseInt(id, 10);
    return Number(id || 0);
  }
}
