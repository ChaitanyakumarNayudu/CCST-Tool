import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatifactionFactorEditComponent } from './satifaction-factor-edit.component';

describe('SatifactionFactorEditComponent', () => {
  let component: SatifactionFactorEditComponent;
  let fixture: ComponentFixture<SatifactionFactorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatifactionFactorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatifactionFactorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
