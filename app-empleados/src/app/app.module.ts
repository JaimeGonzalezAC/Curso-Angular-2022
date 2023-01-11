import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppEmpleadoHijoCComponent } from './app-empleado-hijo-c/app-empleado-hijo-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleados-c/caracteristicas-empleado-c.component';

@NgModule({
  declarations: [
    AppComponent,
    AppEmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
