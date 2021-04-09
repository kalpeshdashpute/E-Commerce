import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolFeaturesComponent } from './cool-features.component';

describe('CoolFeaturesComponent', () => {
  let component: CoolFeaturesComponent;
  let fixture: ComponentFixture<CoolFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoolFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
