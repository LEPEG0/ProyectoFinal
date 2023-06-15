import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonSesionComponent } from './boton-sesion.component';

describe('BotonSesionComponent', () => {
  let component: BotonSesionComponent;
  let fixture: ComponentFixture<BotonSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonSesionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
