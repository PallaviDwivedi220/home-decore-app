import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSolutionsComponent } from './design-solutions.component';

describe('DesignSolutionsComponent', () => {
  let component: DesignSolutionsComponent;
  let fixture: ComponentFixture<DesignSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
