import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';
import { MessageService } from './message.service';

@Injectable()
export class EmployeeService {
  
    constructor(private messageService: MessageService) { }

  getEmployees(): Observable<Employee[]> {
      this.messageService.add('EmployeeService: fetched Employee');
      return of(EMPLOYEES);
    }

  getEmployee(id: number): Observable<Employee> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`EmployeeService: fetched employee id=${id}`);
    return of(EMPLOYEES.find(employee => employee.id === id));
  }

}
