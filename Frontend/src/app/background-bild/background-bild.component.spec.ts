import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundBildComponent } from './background-bild.component';

describe('BackgroundBildComponent', () => {
  let component: BackgroundBildComponent;
  let fixture: ComponentFixture<BackgroundBildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackgroundBildComponent]
    });
    fixture = TestBed.createComponent(BackgroundBildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
