import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoAprendicesComponent } from './ingreso-aprendices.component';

describe('IngresoAprendicesComponent', () => {
  let component: IngresoAprendicesComponent;
  let fixture: ComponentFixture<IngresoAprendicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoAprendicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoAprendicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
