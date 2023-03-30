import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos = [
    {
      nombre: 'Producto 1',
      descripcion: 'Descripción del producto 1',
      precio: 50
    },
    {
      nombre: 'Producto 2',
      descripcion: 'Descripción del producto 2',
      precio: 75
    },
    // Agrega más objetos para cada producto
  ];
}


