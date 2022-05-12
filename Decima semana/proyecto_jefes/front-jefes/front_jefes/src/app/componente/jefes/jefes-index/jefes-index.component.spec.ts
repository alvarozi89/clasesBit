import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JefesIndexComponent } from './jefes-index.component';

describe('JefesIndexComponent', () => {
  let component: JefesIndexComponent;
  let fixture: ComponentFixture<JefesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JefesIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JefesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
