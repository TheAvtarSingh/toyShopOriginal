import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddessComponent } from './addess.component';

describe('AddessComponent', () => {
  let component: AddessComponent;
  let fixture: ComponentFixture<AddessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
