import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapIframeComponent } from './map-iframe.component';

describe('MapIframeComponent', () => {
  let component: MapIframeComponent;
  let fixture: ComponentFixture<MapIframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapIframeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
