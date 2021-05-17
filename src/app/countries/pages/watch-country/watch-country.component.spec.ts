import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchCountryComponent } from './watch-country.component';

describe('WatchCountryComponent', () => {
  let component: WatchCountryComponent;
  let fixture: ComponentFixture<WatchCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
