import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersOrdersViewComponent } from './customers-orders-view.component';

describe('CustomersOrdersViewComponent', () => {
  let component: CustomersOrdersViewComponent;
  let fixture: ComponentFixture<CustomersOrdersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersOrdersViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersOrdersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
