import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoxesComponent } from './foxes/foxes.component';
import { FavesComponent } from './faves/faves.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: FoxesComponent },
  { path: 'favourites', component: FavesComponent },
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
