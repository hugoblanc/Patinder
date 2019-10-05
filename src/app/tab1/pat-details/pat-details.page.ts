import { Component, OnInit } from '@angular/core';
import { PatService } from '../../services/pat.service';

@Component({
  selector: 'app-pat-details',
  templateUrl: './pat-details.page.html',
  styleUrls: ['./pat-details.page.scss'],
})
export class PatDetailsPage implements OnInit {

  patrimoine: any;

  constructor(public patService: PatService) { }

  ngOnInit() {
    this.patrimoine = this.patService.getCurrentPatrimoine();
  }

}
