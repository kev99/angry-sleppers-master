import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { StartComponent } from './start/start.component';
import { HistoryComponent } from './history/history.component';

import { ShopComponent } from './shop/shop.component';
import { ShowsComponent } from './shows/shows.component';
import { CdsComponent } from './cds/cds.component';
import { ContactComponent } from './contact/contact.component';
import { Page404Component } from './page404/page404.component';
import { PicturesComponent } from './pictures/pictures.component';

const routes: Routes = [
{path: '' , component : WelcomeComponent},
{path: 'welcome' , component : WelcomeComponent},
{path: 'start' ,  component: StartComponent},
{path: 'contact' ,  component: ContactComponent},
{path: 'history' ,  component: HistoryComponent},
{path: 'shop' ,  component: ShopComponent},
{path: 'shows' ,  component: ShowsComponent},
{path: 'cds' ,  component: CdsComponent},
{path: 'pictures', component: PicturesComponent },
{path: '**' , component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [WelcomeComponent, StartComponent,
  ContactComponent, HistoryComponent, ContactComponent ,
   CdsComponent, ShopComponent , ShowsComponent , Page404Component, PicturesComponent];
