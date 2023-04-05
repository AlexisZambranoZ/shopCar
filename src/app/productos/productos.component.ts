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
    {id: "001",nombre: 'Producto 1', descripcion: 'Descripción del producto 1', precio: 50 ,imagen: '../../assets/1.jpg'},
    {id: "002", nombre: 'Producto 2', descripcion: 'Descripción del producto 2', precio: 75 ,imagen: '../../assets/2.jpg' },
    {id: "003", nombre: 'Producto 3', descripcion: 'Descripción del producto 3', precio: 100,imagen: '../../assets/3.jpg' },
    {id: "004", nombre: 'Producto 4', descripcion: 'Descripción del producto 3', precio: 100,imagen: '../../assets/4.jpg' },
    {id: "005", nombre: 'Producto 5', descripcion: 'Descripción del producto 3', precio: 100,imagen: '../../assets/5.jpg' },
    {id: "006", nombre: 'Producto 6', descripcion: 'Descripción del producto 3', precio: 100,imagen: '../../assets/6.jpg' },
    {id: "007", nombre: 'Producto 7', descripcion: 'Descripción del producto 3', precio: 100,imagen: '../../assets/7.jpg' },
    {id: "008", nombre: 'Producto 8', descripcion: 'Descripción del producto 3', precio: 100,imagen: '../../assets/8.jpg' },
    {id: "009", nombre: 'Producto 9', descripcion: 'Descripción del producto 3', precio: 100,imagen: '../../assets/9.jpg' },
    {id: "010", nombre: 'Producto 10', descripcion: 'Descripción del producto 3', precio: 100,imagen: '../../assets/10.jpg' },
    {id: "011", nombre: 'Producto 11', descripcion: 'Descripción del producto 3', precio: 100,imagen: '../../assets/11.jpg' },
    {id: "012", nombre: 'Producto 12', descripcion: 'Descripción del producto 3', precio: 100,imagen: '../../assets/12.jpg' },
    {id: "013", nombre: 'Producto 13', descripcion: 'Descripción del producto 3', precio: 100,imagen: '../../assets/13.jpg' },
    {id: "014", nombre: 'Producto 14', descripcion: 'Descripción del producto 3', precio: 100,imagen: '../../assets/14.jpg' },

  ];

  agregarAlCarrito(producto: Producto) {
    console.log(producto);
    this.carritoService.agregarProducto(producto)
  }



}


