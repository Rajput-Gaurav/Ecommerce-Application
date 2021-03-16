import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryAddEditComponent } from './grocery-add-edit.component';

describe('GroceryAddEditComponent', () => {
  let component: GroceryAddEditComponent;
  let fixture: ComponentFixture<GroceryAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroceryAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
