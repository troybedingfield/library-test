import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponentLocal } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponentLocal;
  let fixture: ComponentFixture<ButtonComponentLocal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponentLocal]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonComponentLocal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
