import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigcardcolComponent } from './bigcardcol.component';

describe('BigcardcolComponent', () => {
  let component: BigcardcolComponent;
  let fixture: ComponentFixture<BigcardcolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigcardcolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigcardcolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
