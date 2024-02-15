import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestarServicioComponent } from './prestar-servicio.component';

describe('PrestarServicioComponent', () => {
  let component: PrestarServicioComponent;
  let fixture: ComponentFixture<PrestarServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestarServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
