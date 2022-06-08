import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  mostrarRepetir=false;

  usuario= new Usuario();
  v_password="";
  r_password="Repetir Password"

  mostrar():void{

    this.mostrarRepetir=true;
  }
  ocultar():void{

    this.mostrarRepetir=false;

  }

  agredar(){
      
    /*
    validar que conisiden las contraselas ingresadas
    */
        if(this.usuario.password==this.v_password){
        
          /** si coniciden */
              console.log("mismo password");
        
            }else{
            
              /** si no coinciden  */
              this.v_password="";
            
              this.r_password="No son el mismo password"
        }
}
  constructor() {

  }
  ngOnInit(): void {

  }

}
