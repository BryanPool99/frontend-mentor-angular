import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPreparationTime } from './card-preparation-time';

describe('CardPreparationTime', () => {
  let component: CardPreparationTime;
  let fixture: ComponentFixture<CardPreparationTime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPreparationTime]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPreparationTime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
