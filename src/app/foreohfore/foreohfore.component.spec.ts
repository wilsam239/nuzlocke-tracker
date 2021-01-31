import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeohforeComponent } from './foreohfore.component';

describe('ForeohforeComponent', () => {
  let component: ForeohforeComponent;
  let fixture: ComponentFixture<ForeohforeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeohforeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeohforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
