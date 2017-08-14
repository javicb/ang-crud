import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular CRUD';
  msg = '';
  hideUpdate = true;

  employees = [
    {name: 'Javier', position: 'Programador', email: 'javi@gmail.com' },
    {name: 'Javier', position: 'Programador', email: 'javi@gmail.com' },
    {name: 'Javier', position: 'Programador', email: 'javi@gmail.com' }
  ];

  indice;
  model: any = {};
  model2: any = {};

  addEmployee(): void {
    this.employees.push(this.model);
    this.msg = 'Datos añadidos correctamente.';
   }

  deleteEmployee(i): void {
    const answer = confirm('¿Seguro que deseas eliminar los datos?');
    if (answer) {
      this.employees.splice(i, 1);
      this.msg = 'Datos eliminados correctamente.';
    }
   }

  editEmployee(i): void {
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.email = this.employees[i].email;
    this.model2.position = this.employees[i].position;
    this.indice = i;
  }

  updateEmployee(): void {
    const i = this.indice;
    for (let j = 0; j < this.employees.length; j++) {
      if (i === j) {
        this.employees[i] = this.model2;
        this.msg = 'Datos actualizados correctamente';
        this.hideUpdate = true;
        this.model2 = { };
      }
    }
   }

   closeAlert(): void {
     this.msg = '';
   }

}
