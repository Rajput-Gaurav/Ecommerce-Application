import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersOrdersAddEditComponent } from './customers-orders-add-edit.component';

describe('CustomersOrdersAddEditComponent', () => {
  let component: CustomersOrdersAddEditComponent;
  let fixture: ComponentFixture<CustomersOrdersAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersOrdersAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersOrdersAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
