import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { TypeEmployee } from '../../models/type-employee';
import { Department } from '../../models/department';
import { Employee } from '../../models/employee';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent implements OnInit, AfterViewInit, OnDestroy {

  department: Department = new Department();  
  employeesDepartment: Employee[] = []
  totaAllocation: number = 0;

  constructor(public sharedService: SharedService){  }
    
  ngOnInit(): void {
    this.sharedService.employeListObserver.subscribe(list => {
      console.log(list)
      this.department.employees = list;
      this.completeTask();
    });
  }

  ngAfterViewInit(): void {
    
  }

  employeeAddedToDeparment(e: string) {        
    let typeEmp = this.sharedService.typesList.find(p => p.name.toLowerCase() === e.toLowerCase()) || this.sharedService.typesList[0];    
    let emp = new Employee(0, typeEmp.name, typeEmp.allocation, 0);
    this.sharedService.setValue(emp);
  }

  employeeAddedToManager(e: Employee){    
    let typeEmp = this.sharedService.typesList.find(p => p.name.toLowerCase() === e.typeName.toLowerCase()) || this.sharedService.typesList[0];
    e.id = 0;
    e.salary = typeEmp.allocation;
    e.typeName = typeEmp.name;
    this.sharedService.setValue(e);
  }

  completeTask() {
    this.department.employees.forEach((e) => {
      e.listEmployees = this.department.employees.filter(p => p.idManager == e.id);
    });

    this.totaAllocation = this.department.employees.reduce((a, b) => {
      return a + b.salary;
    }, 0);

    this.employeesDepartment = this.department.employees.filter(p => p.idManager === 0);
  }

  ngOnDestroy(): void {
    this.sharedService.employeListObserver.unsubscribe();
  }


}
