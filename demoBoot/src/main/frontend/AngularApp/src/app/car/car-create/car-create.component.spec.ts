import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCreateComponent } from './car-create.component';

describe('CarCreateComponent', () => {
  let component: CarCreateComponent;
  let fixture: ComponentFixture<CarCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}

.example-full-width {
  width: 100%;
}
