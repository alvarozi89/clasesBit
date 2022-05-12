import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JefesCrearComponent } from './jefes-crear.component';

describe('JefesCrearComponent', () => {
  let component: JefesCrearComponent;
  let fixture: ComponentFixture<JefesCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JefesCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JefesCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
