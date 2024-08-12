import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionFuturoComponent } from './seccion-futuro.component';

describe('SeccionFuturoComponent', () => {
  let component: SeccionFuturoComponent;
  let fixture: ComponentFixture<SeccionFuturoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionFuturoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionFuturoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
