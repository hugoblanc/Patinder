import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-map-iframe',
  templateUrl: './map-iframe.component.html',
  styleUrls: ['./map-iframe.component.scss'],
})
export class MapIframeComponent implements OnInit {


  @Input() lon: string;
  @Input() lat: string;

  constructor(private domSanitizer: DomSanitizer) { }

  link: SafeResourceUrl;

  ngOnInit() {

    // tslint:disable-next-line: max-line-length
    this.link = this.domSanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=${this.lon},${this.lat}&hl=es;z=14&amp&output=embed`);

  }

}
