import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionInterneComponent } from './gestion-interne.component';

describe('GestionInterneComponent', () => {
  let component: GestionInterneComponent;
  let fixture: ComponentFixture<GestionInterneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionInterneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionInterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
