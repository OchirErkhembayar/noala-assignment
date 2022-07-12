import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoxesComponent } from './foxes/foxes.component';
import { FavesComponent } from './faves/faves.component';

const routes: Routes = [
  { path: '', component: FoxesComponent },
  { path: 'favourites', component: FavesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
