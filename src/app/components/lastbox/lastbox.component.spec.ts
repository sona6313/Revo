import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastboxComponent } from './lastbox.component';

describe('LastboxComponent', () => {
  let component: LastboxComponent;
  let fixture: ComponentFixture<LastboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
