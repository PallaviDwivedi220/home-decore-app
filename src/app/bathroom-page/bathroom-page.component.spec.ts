import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathroomPageComponent } from './bathroom-page.component';

describe('BathroomPageComponent', () => {
  let component: BathroomPageComponent;
  let fixture: ComponentFixture<BathroomPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BathroomPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BathroomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
