import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDeRegistroComponent } from './formulario-de-registro.component';

describe('FormularioDeRegistroComponent', () => {
  let component: FormularioDeRegistroComponent;
  let fixture: ComponentFixture<FormularioDeRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioDeRegistroComponent]
    });
    fixture = TestBed.createComponent(FormularioDeRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
