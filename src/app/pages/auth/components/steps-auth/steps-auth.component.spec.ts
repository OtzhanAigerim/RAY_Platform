import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsAuthComponent } from './steps-auth.component';

describe('StepsAuthComponent', () => {
  let component: StepsAuthComponent;
  let fixture: ComponentFixture<StepsAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
