import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoxesComponent } from './foxes/foxes.component';
import { FoxComponent } from './foxes/fox/fox.component';
import { FavesComponent } from './faves/faves.component';
import { FaveComponent } from './faves/fave/fave.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    FoxesComponent,
    FoxComponent,
    FavesComponent,
    FaveComponent,
    HeaderComponent,
    NotificationComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
