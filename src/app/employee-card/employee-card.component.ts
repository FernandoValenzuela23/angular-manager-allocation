import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../../models/employee';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css'
})
export class EmployeeCardComponent {
  @Input() employee: Employee = new Employee(0,'',0,0);

  constructor(public sharedService: SharedService) {

  }

  employeeAddedToManager(e: any) {    
    let type = this.sharedService.typesList.find(p => p.name.toLowerCase() === e.toString().toLowerCase()) || this.sharedService.typesList[0];
    let newEmp = new Employee(0, type.name, type.allocation, this.employee.id);
    this.sharedService.setValue(newEmp);
  }

}
