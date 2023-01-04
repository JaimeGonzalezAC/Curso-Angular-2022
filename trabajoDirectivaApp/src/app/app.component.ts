import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro de usuarios';
  nombre:string = "";
  apellido:string = "";
  mostrar:boolean = false;
  entradas:any[];
  mostrarTexto():void{
    this.mostrar = true;
  }

  constructor(){
    this.entradas = [{titulo:"C# cada dia mas potente"},
  {titulo:"A python le siguen diciendo el de la viborita"},
{titulo:"Java aun no esta obsoleto"},
{titulo:"ya dejen morir a php"}]
  }
}
