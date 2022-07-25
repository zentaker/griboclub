import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstiloComponent } from './pages/estilo/estilo.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent },
  {path: 'estilo', component:EstiloComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
