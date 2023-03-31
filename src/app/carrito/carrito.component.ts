import { Component } from '@angular/core';
import { ShopcarrService } from '../shopcarr.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  constructor(public carritoService: ShopcarrService){
    
  }
}
