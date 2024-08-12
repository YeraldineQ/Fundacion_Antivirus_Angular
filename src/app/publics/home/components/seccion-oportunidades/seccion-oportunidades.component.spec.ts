import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionOportunidadesComponent } from './seccion-oportunidades.component';

describe('SeccionOportunidadesComponent', () => {
  let component: SeccionOportunidadesComponent;
  let fixture: ComponentFixture<SeccionOportunidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionOportunidadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionOportunidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
