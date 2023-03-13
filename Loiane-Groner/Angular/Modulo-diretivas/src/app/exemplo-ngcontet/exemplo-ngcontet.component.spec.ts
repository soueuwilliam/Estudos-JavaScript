import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploNgcontetComponent } from './exemplo-ngcontet.component';

describe('ExemploNgcontetComponent', () => {
  let component: ExemploNgcontetComponent;
  let fixture: ComponentFixture<ExemploNgcontetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploNgcontetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploNgcontetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
