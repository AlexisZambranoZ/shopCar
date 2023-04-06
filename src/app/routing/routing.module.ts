import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from '../productos/productos.component';
import { AboutPageComponent } from '../about-page/about-page.component';
import { ContactComponent } from '../contact/contact.component';
import { RouterModule } from '@angular/router';


const routes = [
  { path: '', component: ProductosComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
