import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  employee: Employee[] = [];
 
  constructor(private employeeService: EmployeeService) { }
 
  ngOnInit() {
    this.getEmployees();
  }
 
  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employee => this.employee = employee.slice(1, 5));
  }
}