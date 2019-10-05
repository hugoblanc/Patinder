import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PatDetailsPage } from './pat-details.page';
import { MapIframeComponent } from '../../components/map-iframe/map-iframe.component';

const routes: Routes = [
  {
    path: '',
    component: PatDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PatDetailsPage, MapIframeComponent],
  entryComponents: [MapIframeComponent],
  exports: [MapIframeComponent]
})
export class PatDetailsPageModule {}
