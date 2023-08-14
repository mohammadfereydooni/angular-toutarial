import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalceHolderComponent } from './palce-holder.component';

describe('PalceHolderComponent', () => {
  let component: PalceHolderComponent;
  let fixture: ComponentFixture<PalceHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalceHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalceHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
