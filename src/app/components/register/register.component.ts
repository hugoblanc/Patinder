import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public username = '';
  public code = '';
  public displayErrorMsg: boolean;
  public loading: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  postUser() {
    this.loading = true;
    this.displayErrorMsg = false;
    this.userService.saveUser(this.username).subscribe((userId) => {
      this.userService.storeUser(userId);
      this.loading = false;
    }, () => {
      this.displayErrorMsg = true;
      this.loading = false;
    });
  }

}
