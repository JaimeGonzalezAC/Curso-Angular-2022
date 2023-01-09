import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-empleados';
  txtNombre:string = "";
  txtApellidos:string = "";
  txtCargo:string = "";
  txtSalario:number =0;
  /*empleados:Empleado[] =
  [
    {nombre:'Jaime', apellido:'De la Cruz', cargo: 'Desarrollador', salario: 20000},
    {nombre:'Lucía', apellido:'De la Cruz', cargo: 'Desarrollador', salario: 25000},
    {nombre:'Jairo', apellido:'Valencia', cargo: 'Desarrollador', salario: 22000},
    {nombre:'Rafael', apellido:'Zamora', cargo: 'Desarrollador', salario: 12000}
  ];*/
  empleados:Empleado[]=[
    new Empleado('Jaime','De la cruz', 'Desarrollador', 20000),
    new Empleado('Lucía','De la cruz', 'Desarrolladora', 18000),
    new Empleado('Jairo','Valencia', 'Desarrollador', 18000),
    new Empleado('Rafael','Zamora', 'Desarrollador', 18000),
  ];
  agregarEmpleado(){
    let newEmpleado = new Empleado(this.txtNombre,this.txtApellidos,this.txtCargo,this.txtSalario);
    this.empleados.push(newEmpleado);
  }
}
