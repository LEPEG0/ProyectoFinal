import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarDisponibilidadComponent } from './buscar-disponibilidad.component';

describe('BuscarDisponibilidadComponent', () => {
  let component: BuscarDisponibilidadComponent;
  let fixture: ComponentFixture<BuscarDisponibilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarDisponibilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarDisponibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
