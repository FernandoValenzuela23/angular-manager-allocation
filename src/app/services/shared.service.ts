import { Injectable, OnDestroy } from '@angular/core';
import { Employee } from '../../models/employee';
import { Subject } from 'rxjs';
import { TypeEmployee } from '../../models/type-employee';

@Injectable({
  providedIn: 'root'
})
export class SharedService implements OnDestroy {
  private employeeList: Employee[] = [];
  employeListObserver = new Subject<Employee[]>();
  typesList: TypeEmployee[] = [];

  constructor() { 

    this.employeListObserver.subscribe(v => this.employeeList = v);

    this.typesList.push(new TypeEmployee('Manager', 300))
    this.typesList.push(new TypeEmployee('Developer', 1000))
    this.typesList.push(new TypeEmployee('QA Tester', 500))

  }
  
  setValue(newEmployee: Employee) {
    let id = (this.employeeList.length == 0 ? 1 : this.employeeList[this.employeeList.length -1].id) + 1;
    newEmployee.id = id;
    this.employeeList.push(newEmployee);
    this.employeListObserver.next(this.employeeList);
  }

  ngOnDestroy(): void {
    this.employeListObserver.unsubscribe();
  }

}
