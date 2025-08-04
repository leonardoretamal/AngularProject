import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/shared/navbar/navbar";

@Component({
  selector: 'app-root', //es opcional, crea una etiqueta <app-root>
  imports: [RouterOutlet, Navbar], //tambien es opcional, pero necesario si se usan rutas
  templateUrl: './app.html', //referencia al archivo html
  //viene con standalone por defecto en true
})
export class App {
  protected title = 'Leonardo Retamal'; //typescript se encarga de inferir el tipo de la variable
}
