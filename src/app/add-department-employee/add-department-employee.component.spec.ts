import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepartmentEmployeeComponent } from './add-department-employee.component';

describe('AddDepartmentEmployeeComponent', () => {
  let component: AddDepartmentEmployeeComponent;
  let fixture: ComponentFixture<AddDepartmentEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDepartmentEmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDepartmentEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
