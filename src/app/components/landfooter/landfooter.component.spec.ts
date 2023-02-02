import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandfooterComponent } from './landfooter.component';

describe('LandfooterComponent', () => {
  let component: LandfooterComponent;
  let fixture: ComponentFixture<LandfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
