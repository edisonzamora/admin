import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServiceService {

  constructor() { }


getUsuarios(){

  return [{
    id:"1",nombre:"Edison",apellido:"Zamora",correo:"edison@gmail.com",password:""
  },{
    id:"2",nombre:"Camila",apellido:"Cabello",correo:"camila@gmail.com",password:""
  }]
}
}
