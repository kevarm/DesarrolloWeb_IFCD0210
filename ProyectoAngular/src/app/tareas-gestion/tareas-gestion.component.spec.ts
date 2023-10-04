import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasGestionComponent } from './tareas-gestion.component';

describe('TareasGestionComponent', () => {
  let component: TareasGestionComponent;
  let fixture: ComponentFixture<TareasGestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareasGestionComponent]
    });
    fixture = TestBed.createComponent(TareasGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
