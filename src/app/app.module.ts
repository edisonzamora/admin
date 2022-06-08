import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AddComponent } from './add/add.component';

import {UsuariosServiceService} from '../app/Service/usuarios-service.service';
@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsuariosServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
