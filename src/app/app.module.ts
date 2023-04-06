import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarritoComponent } from './carrito/carrito.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactComponent } from './contact/contact.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AppRoutingModule } from './routing/routing.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductosComponent,
    CarritoComponent,
    AboutPageComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule ,
    BrowserModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
