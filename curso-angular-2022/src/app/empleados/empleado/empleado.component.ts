import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
nombre = "Jaime";
edad = 30;
empresa = "Código de Jaime";
mayor = this.edad < 18 ? "Menor de edad" : "Mayor de edad";
usuRegistrado = false;
textoRegistro = "No hay nadie registrado";
getRegistroUsuario(){
  this.usuRegistrado =  false;
}
llamaEmpresa(value:String){

}
setUsuarioRegistrado(event:Event){
  if ((<HTMLInputElement>event.target).value == "si") {
    this.textoRegistro = "Usuario registrado";
  } else {
    this.textoRegistro = "Nadie fue registrado";
  }
}
}
