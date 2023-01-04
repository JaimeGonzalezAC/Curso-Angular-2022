import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mini-calculadora';
  PrimerNum:number = 0;
  SegundoNum:number=0;
  resultado:number=0;
  sumar():void{
    this.resultado = this.PrimerNum + this.SegundoNum;
  }
  restar():void{
    this.resultado = this.PrimerNum - this.SegundoNum;
  }
}
