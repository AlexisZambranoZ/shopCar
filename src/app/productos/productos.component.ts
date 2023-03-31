import { Component } from '@angular/core';
import { ShopcarService } from '../shopcarr.service';
import { Producto } from '..';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
    
  mostrarProductos = false;
  
  constructor(private carritoService: ShopcarService) {}

  productos = [
    { nombre: 'Producto 1', descripcion: 'Descripción del producto 1', precio: 50 },
    { nombre: 'Producto 2', descripcion: 'Descripción del producto 2', precio: 75 },
    { nombre: 'Producto 4', descripcion: 'Descripción del producto 3', precio: 100 },
    { nombre: 'Producto 5', descripcion: 'Descripción del producto 3', precio: 100 },
    { nombre: 'Producto 6', descripcion: 'Descripción del producto 3', precio: 100 },
    { nombre: 'Producto 7', descripcion: 'Descripción del producto 3', precio: 100 },
    { nombre: 'Producto 8', descripcion: 'Descripción del producto 3', precio: 100 },
    { nombre: 'Producto 9', descripcion: 'Descripción del producto 3', precio: 100 },

  ];

  agregarAlCarrito(producto: Producto) {
    console.log(producto);
    this.carritoService.agregarProducto(producto)
  }



}


