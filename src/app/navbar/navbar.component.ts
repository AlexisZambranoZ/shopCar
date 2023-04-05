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
