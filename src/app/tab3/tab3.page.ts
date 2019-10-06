import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  user: any;
  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.user = this.userService.user || {};
    this.refreshUser();

  }

  ionViewDidEnter() {
    this.refreshUser();
  }


  refreshUser() {

    this.userService.getUserBackend().subscribe((result) => {
      console.log(result);
      this.user.username = result.username;
      this.user.credit = result.credit;

      this.user.code = this.userService.user.code;
    });
    this.user.code = this.userService.user.code;
  }

}
