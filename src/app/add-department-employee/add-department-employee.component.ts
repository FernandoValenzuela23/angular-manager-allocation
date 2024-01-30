import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-department-employee',
  templateUrl: './add-department-employee.component.html',
  styleUrl: './add-department-employee.component.css'
})
export class AddDepartmentEmployeeComponent {
  @Output() employeeAddedEvent = new EventEmitter<string>();
  constructor()
  {

  }

  addEmployee(id: number) {
    switch (id) {
      case 1:
        this.employeeAddedEvent.emit('MANAGER')
        break;
        
      case 2:
        this.employeeAddedEvent.emit('DEVELOPER')
        break;
      
      case 3:
        this.employeeAddedEvent.emit('QA TESTER')
        break;
    
      default:
        break;
    }
  }


}
