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
    this.user = this.userService.user;

    const solde = this.userService.
  }

}
