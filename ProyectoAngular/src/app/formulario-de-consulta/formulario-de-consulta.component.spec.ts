import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDeConsultaComponent } from './formulario-de-consulta.component';

describe('FormularioDeConsultaComponent', () => {
  let component: FormularioDeConsultaComponent;
  let fixture: ComponentFixture<FormularioDeConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioDeConsultaComponent]
    });
    fixture = TestBed.createComponent(FormularioDeConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
