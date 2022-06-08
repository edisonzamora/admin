import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
{path:'listaUsuarios',component:UsuariosComponent},
{path:'añadirUsuarios',component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
