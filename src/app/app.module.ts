import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarritoComponent } from './carrito/carrito.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductosComponent,
    CarritoComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatToolbarModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
