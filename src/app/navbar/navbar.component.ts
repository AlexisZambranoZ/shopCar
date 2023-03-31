import { Component } from '@angular/core';
import { ShopcarService } from '../shopcarr.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  mostrarCarrito = false
  productosEnCarrito: any[] = [];
  openMenu = false;
  showDropdown = false;
  mostrarProductos = false;
  isOpen = true
  constructor(public carritoService: ShopcarService) {
  }

  productos = [
    { nombre: 'Producto 1', descripcion: 'Descripción del producto 1', precio: 50 },
    { nombre: 'Producto 2', descripcion: 'Descripción del producto 2', precio: 75 },
    { nombre: 'Producto 3', descripcion: 'Descripción del producto 3', precio: 100 }
  ];



  ngOnInit(){
    this.productosEnCarrito = this.carritoService.getProductos();
    console.log(this.productosEnCarrito);
  }

  toggleMenu() {
    this.openMenu = !this.openMenu;
  }
  toggleProductos() {
    this.mostrarProductos = !this.mostrarProductos;
  }

}
