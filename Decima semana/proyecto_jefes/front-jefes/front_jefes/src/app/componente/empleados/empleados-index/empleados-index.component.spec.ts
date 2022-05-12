import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosIndexComponent } from './empleados-index.component';

describe('EmpleadosIndexComponent', () => {
  let component: EmpleadosIndexComponent;
  let fixture: ComponentFixture<EmpleadosIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
