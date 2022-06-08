import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import { UsuariosServiceService } from '../Service/usuarios-service.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuariosList:Usuario[];

  usuarios="Usuarios";

  constructor(private service:UsuariosServiceService) {
    
   }

  ngOnInit(): void {
    this.usuariosList=this.service.getUsuarios();
  }

}
