import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LucesPage } from './luces.page';

describe('LucesPage', () => {
  let component: LucesPage;
  let fixture: ComponentFixture<LucesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LucesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LucesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
