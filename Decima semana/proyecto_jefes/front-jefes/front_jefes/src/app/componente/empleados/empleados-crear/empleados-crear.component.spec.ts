import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosCrearComponent } from './empleados-crear.component';

describe('EmpleadosCrearComponent', () => {
  let component: EmpleadosCrearComponent;
  let fixture: ComponentFixture<EmpleadosCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
