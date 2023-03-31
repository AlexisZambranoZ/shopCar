import { Injectable } from '@angular/core';
import { Producto } from '.';

@Injectable({
  providedIn: 'root'
})
export class ShopcarrService {

  productosEnCarrito: Producto[] = [];

  constructor() { }

  agregarProducto(producto: any) {
    this.productosEnCarrito.push(producto);
  }

  obtenerProductosEnCarrito() {
    return this.productosEnCarrito;
  }
}
