import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsSquaresComponent } from './points-squares.component';

describe('PointsSquaresComponent', () => {
  let component: PointsSquaresComponent;
  let fixture: ComponentFixture<PointsSquaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointsSquaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsSquaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
