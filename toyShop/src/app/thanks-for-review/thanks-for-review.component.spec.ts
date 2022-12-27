import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksForReviewComponent } from './thanks-for-review.component';

describe('ThanksForReviewComponent', () => {
  let component: ThanksForReviewComponent;
  let fixture: ComponentFixture<ThanksForReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanksForReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanksForReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
