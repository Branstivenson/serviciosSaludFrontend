import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarServicioComponent } from './insertar-servicio.component';

describe('InsertarServicioComponent', () => {
  let component: InsertarServicioComponent;
  let fixture: ComponentFixture<InsertarServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
