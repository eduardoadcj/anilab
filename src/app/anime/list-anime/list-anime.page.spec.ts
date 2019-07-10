import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnimePage } from './list-anime.page';

describe('ListAnimePage', () => {
  let component: ListAnimePage;
  let fixture: ComponentFixture<ListAnimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAnimePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAnimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
