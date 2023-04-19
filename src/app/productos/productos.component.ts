import { Component } from '@angular/core';
import { ShopcarService } from '../shopcarr.service';
import { Producto } from '..';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationBuyComponent } from '../confirmation-buy/confirmation-buy.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  mostrarProductos = false;

  constructor(private carritoService: ShopcarService,
    private dialog: MatDialog) { }

  productos = [
    { id: "001", nombre: 'Playera Vue', descripcion: '', talla: [' CH / M / G '], precio: 50, imagen: '../../assets/1.jpg' },
    { id: "002", nombre: 'Playera Angular', descripcion: ' ', talla: [' CH / M / G '], precio: 75, imagen: '../../assets/2.jpg' },
    { id: "003", nombre: 'Playera React', descripcion: '', talla:[' CH / M / G '], precio: 100, imagen: '../../assets/3.jpg' },
    { id: "004", nombre: 'Playera Redux', descripcion: '', talla:[' CH / M / G '], precio: 100, imagen: '../../assets/4.jpg' },
    { id: "005", nombre: 'Playera Node', descripcion: '', talla:[' CH / M / G '], precio: 100, imagen: '../../assets/5.jpg' },
    { id: "006", nombre: 'Playera SASS', descripcion: '', talla:[' CH / M / G '], precio: 100, imagen: '../../assets/6.jpg' },
    { id: "007", nombre: 'Playera HTML', descripcion: '', talla:[' CH / M / G '], precio: 100, imagen: '../../assets/7.jpg' },
    { id: "008", nombre: 'Playera Github', descripcion: '', talla:[' CH / M / G '], precio: 100, imagen: '../../assets/8.jpg' },
    { id: "009", nombre: 'Playera Bulma', descripcion: '', talla: [' CH / M / G '], precio: 100, imagen: '../../assets/9.jpg' },
    { id: "010", nombre: 'Playera TypeScrip', descripcion: '', talla: [' CH / M / G '], precio: 100, imagen: '../../assets/10.jpg' },
    { id: "011", nombre: 'Playera Drupal', descripcion: '', talla: [' CH / M / G '], precio: 100, imagen: '../../assets/11.jpg' },
    { id: "012", nombre: 'Playera JavaScrip', descripcion: '', talla: [' CH / M / G '], precio: 100, imagen: '../../assets/12.jpg' },
    { id: "013", nombre: 'Playera GraphQL', descripcion: '', talla: [' CH / M / G '], precio: 100, imagen: '../../assets/13.jpg' },
    { id: "014", nombre: 'Playera WordPress', descripcion: '', talla: [' CH / M / G '], precio: 100, imagen: '../../assets/14.jpg' },
  ];


  agregarAlCarrito(producto: Producto) {
    const dialogRef = this.dialog.open(ConfirmationBuyComponent, {
      width: '250px',
      data: { name: 'Angular' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result){
        this.sweetAlert()
      }else {
        return
      }
    });

    console.log(producto);
    this.carritoService.agregarProducto(producto)
  }

  sweetAlert() {

    Swal.fire({
      title: 'Producto Agregado',
      text: '',
      icon: 'success', // success, error, warning, info
      confirmButtonText: 'Aceptar'
    });


}
}


