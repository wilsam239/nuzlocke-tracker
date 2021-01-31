import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuzlockeComponent } from './nuzlocke.component';

describe('NuzlockeComponent', () => {
  let component: NuzlockeComponent;
  let fixture: ComponentFixture<NuzlockeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuzlockeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuzlockeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
