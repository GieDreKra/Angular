import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsListsComponent } from './points-lists.component';

describe('PointsListsComponent', () => {
  let component: PointsListsComponent;
  let fixture: ComponentFixture<PointsListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointsListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
