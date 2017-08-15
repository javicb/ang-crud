import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../employee';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { EmployeeService } from '../services/employee.service';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {
  title = 'Angular CRUD';
  msg = '';
  employees: Employee[];
  selectedEmployee: Employee;

  constructor(
    private router: Router,
    private emploeyeeService: EmployeeService) {}

  indice;
  model: any = {};
  model2: any = {};

  addEmployee(): void {
    this.employees.push(this.model);
    this.msg = 'Datos añadidos correctamente.';
   }

  deleteEmployee(i): void {
    console.log(i);
    const answer = confirm('¿Seguro que deseas eliminar los datos?');
    if (answer) {
      this.employees.splice(i, 1);
      this.msg = 'Datos eliminados correctamente.';
    }
   }

  updateEmployee(): void {
    const i = this.indice;
    for (let j = 0; j < this.employees.length; j++) {
      if (i === j) {
        this.employees[i] = this.model2;
        this.msg = 'Datos actualizados correctamente';
        this.model2 = { };
      }
    }
   }

   getEmployees(): void {
     this.emploeyeeService.getEmployees()
      .then(employees => this.employees = employees);
   }

   ngOnInit(): void {
     this.getEmployees();
   }

   onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
   }

   gotoDetail(id): void {
     this.router.navigate(['/edit', id]);
   }

   closeAlert(): void { }

}
