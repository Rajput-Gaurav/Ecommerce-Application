import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoriesAddEditComponent } from './product-categories-add-edit.component';

describe('ProductCategoriesAddEditComponent', () => {
  let component: ProductCategoriesAddEditComponent;
  let fixture: ComponentFixture<ProductCategoriesAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategoriesAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoriesAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
