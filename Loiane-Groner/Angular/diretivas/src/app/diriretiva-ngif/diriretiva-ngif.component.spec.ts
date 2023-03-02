import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiriretivaNgifComponent } from './diriretiva-ngif.component';

describe('DiriretivaNgifComponent', () => {
  let component: DiriretivaNgifComponent;
  let fixture: ComponentFixture<DiriretivaNgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiriretivaNgifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiriretivaNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
