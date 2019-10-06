import {Component, OnInit} from '@angular/core';
import {ToastController} from '@ionic/angular';
import {UserService} from '../services/user.service';
import {PatService} from '../services/pat.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public list: Patrimoine[];
  public limit = 4;
  public bypassLimit = false;
  public loading: boolean;

  constructor(
      public toastController: ToastController,
      private userService: UserService,
      private patService: PatService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  ionViewDidEnter() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.list = this.patService.getPatrimoine();
    this.userService.getUserBackend().subscribe((res) => {
      const recordedList: Patrimoine[] = res.record_ids || [];
      if (!recordedList.length) {
        this.list = [];
      }
      const list = this.list.map((pat: any) => {
        let found = false;
        for (const record of recordedList) {
          if (pat.recordid === record) {
            found = true;
          }
        }
        if (found) {
          return pat;
        }
      });
      this.list = list.filter(el => !!el);
      this.loading = false;
    }, () => {
      this.list = [];
      this.loading = false;
    });
  }

  displayElement(index: number): boolean {
    if (this.bypassLimit) {
      return true;
    }
    return index < this.limit;
  }

  async deleteItem(index: number) {
    // TODO: delete back
    this.list.splice(index, 1);
    await this.presentToast();
  }

  removeBypassLimit() {
    this.bypassLimit = true;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Suppression effectué',
      duration: 2000
    });
    toast.present();
  }

  moreItem(): number {
    const count = Number(this.list.length - this.limit);
    if (count < 1) {
      this.removeBypassLimit();
      return 0;
    }
    return count;
  }
}
