import { Component } from '@angular/core';
import { ShopcarrService } from '../shopcarr.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  
  productosEnCarrito: string[] = [];
  mostrarProductos = false;

  productos = [
    { nombre: 'Producto 1', descripcion: 'Descripción del producto 1', precio: 50 },
    { nombre: 'Producto 2', descripcion: 'Descripción del producto 2', precio: 75 },
    { nombre: 'Producto 3', descripcion: 'Descripción del producto 3', precio: 100 }
  ];

  constructor(private carritoService: ShopcarrService) {}

  agregarAlCarrito(producto: any) {
    console.log(producto);
    this.carritoService.agregarProducto(producto)
  }



}


