import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportAddEditComponent } from './support-add-edit.component';

describe('SupportAddEditComponent', () => {
  let component: SupportAddEditComponent;
  let fixture: ComponentFixture<SupportAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
