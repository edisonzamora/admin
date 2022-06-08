import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Admin-Usuarios';

  constructor(private redireccion:Router){}
  usuarios(){

    this.redireccion.navigate(["listaUsuarios"]);
  }

  anadir(){
    this.redireccion.navigate(["añadirUsuarios"]);
  }
}
