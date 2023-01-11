import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-app-empleado-hijo-c',
  templateUrl: './app-empleado-hijo-c.component.html',
  styleUrls: ['./app-empleado-hijo-c.component.css']
})
export class AppEmpleadoHijoCComponent implements OnInit {
  @Input() empleadoDeLista:Empleado;
  @Input() indice:number;
  constructor() { }

  ngOnInit(): void {
  }
  
 arrayCaracteristicas = [''];

 agregarCaracteristica(nuevaCaracteristica:string){
  this.arrayCaracteristicas.push(nuevaCaracteristica);
 }
}
