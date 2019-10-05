import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public username = '';

  constructor(private userService: UserService) { }

  ngOnInit() {}

  postUser() {
    if (this.username.length) {
      this.userService.saveUser(this.username).subscribe((res) => {
        console.log('res', res);
      });
    }
  }

}
