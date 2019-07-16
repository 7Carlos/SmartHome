import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmasPage } from './alarmas.page';

describe('AlarmasPage', () => {
  let component: AlarmasPage;
  let fixture: ComponentFixture<AlarmasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
