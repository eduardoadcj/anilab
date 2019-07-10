import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAnimePage } from './view-anime.page';

describe('ViewAnimePage', () => {
  let component: ViewAnimePage;
  let fixture: ComponentFixture<ViewAnimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAnimePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAnimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
