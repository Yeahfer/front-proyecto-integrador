import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { RegistroAlumnosComponent } from './registro-alumnos/registro-alumnos.component';
import { CalificacionesAlumnosComponent } from './calificaciones-alumnos/calificaciones-alumnos.component';
import { BuscarIntercambioComponent } from './buscar-intercambio/buscar-intercambio.component';
import { RevalidarComponent } from './revalidar/revalidar.component';
import { RegistroCarreraComponent } from './registro-carrera/registro-carrera.component';
import { CreacionMateriasComponent } from './creacion-materias/creacion-materias.component';
import { CreacionTemasComponent } from './creacion-temas/creacion-temas.component';


const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'registro', component: RegistroAlumnosComponent},
    {path: 'calificaciones', component: CalificacionesAlumnosComponent},
    {path: 'buscar-intercambios', component: BuscarIntercambioComponent},
    {path: 'revalidar', component: RevalidarComponent},
    {path: 'registarCarrera', component: RegistroCarreraComponent},
    {path: 'registarMateria', component: CreacionMateriasComponent},
    {path: 'registarTema', component: CreacionTemasComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    HomeComponent,
    RegistroAlumnosComponent,
    CalificacionesAlumnosComponent,
    BuscarIntercambioComponent,
    RevalidarComponent,
    RegistroCarreraComponent,
    CreacionMateriasComponent,
    CreacionTemasComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }