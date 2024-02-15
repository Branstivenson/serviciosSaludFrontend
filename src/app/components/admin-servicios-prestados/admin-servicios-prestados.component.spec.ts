import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServiciosPrestadosComponent } from './admin-servicios-prestados.component';

describe('AdminServiciosPrestadosComponent', () => {
  let component: AdminServiciosPrestadosComponent;
  let fixture: ComponentFixture<AdminServiciosPrestadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminServiciosPrestadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminServiciosPrestadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
