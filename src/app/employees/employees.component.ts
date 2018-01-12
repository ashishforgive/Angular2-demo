import { Component, OnInit } from '@angular/core';
import {  Employee } from '../employee';
import { EMPLOYEES } from '../mock-employees';
import { EmployeeService } from '../employee.service';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employee : Employee[];
  //selectedEmployee: Employee;
  
  constructor(private employeeService: EmployeeService) { }
  getEmployees(): void {
    this.employeeService.getEmployees()
        .subscribe(employee => this.employee = employee);
  }

  ngOnInit() {
    this.getEmployees();
  }

}
