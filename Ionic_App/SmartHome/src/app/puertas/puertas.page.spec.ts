import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuertasPage } from './puertas.page';

describe('PuertasPage', () => {
  let component: PuertasPage;
  let fixture: ComponentFixture<PuertasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuertasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuertasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
