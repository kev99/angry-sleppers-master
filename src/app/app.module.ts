import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponent  } from './app-routing.module';
import { AppComponent } from './app.component';
import { PicturesComponent } from './pictures/pictures.component';
import { BarnavComponent } from './barnav/barnav.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
   PicturesComponent,
   BarnavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
