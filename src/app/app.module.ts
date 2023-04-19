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
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './routing/routing.module';
import { FooterComponent } from './footer/footer.component';
import { ConfirmationBuyComponent } from './confirmation-buy/confirmation-buy.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductosComponent,
    CarritoComponent,
    AboutPageComponent,
    ContactComponent,
    FooterComponent,
    ConfirmationBuyComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
