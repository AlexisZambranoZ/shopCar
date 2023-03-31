import { Injectable } from '@angular/core';
import { Producto } from '.';

@Injectable({
  providedIn: 'root'
})
export class ShopcarService {

  productos: Producto[] = [];

  constructor() { }

  getProductos() {
    return this.productos;
  }
  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }

  eliminarProducto(producto: Producto) {
    const index = this.productos.indexOf(producto);
    this.productos.splice(index, 1);
  }

  
}
