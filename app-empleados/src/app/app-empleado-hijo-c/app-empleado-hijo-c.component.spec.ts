import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEmpleadoHijoCComponent } from './app-empleado-hijo-c.component';

describe('AppEmpleadoHijoCComponent', () => {
  let component: AppEmpleadoHijoCComponent;
  let fixture: ComponentFixture<AppEmpleadoHijoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppEmpleadoHijoCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppEmpleadoHijoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
