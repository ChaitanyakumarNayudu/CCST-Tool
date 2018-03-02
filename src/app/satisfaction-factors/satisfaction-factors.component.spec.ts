import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisfactionFactorsComponent } from './satisfaction-factors.component';

describe('SatisfactionFactorsComponent', () => {
  let component: SatisfactionFactorsComponent;
  let fixture: ComponentFixture<SatisfactionFactorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatisfactionFactorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatisfactionFactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
