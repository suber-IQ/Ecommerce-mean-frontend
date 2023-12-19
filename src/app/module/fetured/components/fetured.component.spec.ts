import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeturedComponent } from './fetured.component';

describe('FeturedComponent', () => {
  let component: FeturedComponent;
  let fixture: ComponentFixture<FeturedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeturedComponent]
    });
    fixture = TestBed.createComponent(FeturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
