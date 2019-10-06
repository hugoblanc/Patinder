import {Component, OnInit} from '@angular/core';
import {ToastController} from '@ionic/angular';
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
      private patService: PatService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.patService.getSavedPatrimoine().subscribe(res => {
      this.list = res;
      this.loading = false;
    }, () => {
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
