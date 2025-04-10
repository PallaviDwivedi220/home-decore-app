import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedroomPageComponent } from './bedroom-page.component';

describe('BedroomPageComponent', () => {
  let component: BedroomPageComponent;
  let fixture: ComponentFixture<BedroomPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BedroomPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BedroomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
