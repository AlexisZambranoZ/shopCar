import { Component, Inject } from '@angular/core';
import { ShopcarService } from '../shopcarr.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Producto } from '..';

@Component({
  selector: 'app-confirmation-buy',
  templateUrl: './confirmation-buy.component.html',
  styleUrls: ['./confirmation-buy.component.css']
})
export class ConfirmationBuyComponent {
  name: string = "";
  tallas: string[] = [];
  constructor(
    public _carritoService: ShopcarService,
    public dialogRef: MatDialogRef<ConfirmationBuyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Producto
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }


}
