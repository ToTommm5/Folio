import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CVPageComponent } from './cv-page.component';

describe('CVPageComponent', () => {
  let component: CVPageComponent;
  let fixture: ComponentFixture<CVPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CVPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CVPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
