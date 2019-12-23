import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ProductsService} from '../../products.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  selectedProduct: Product[];
  editProduct: boolean;

  constructor( private productsService: ProductsService) { }

  ngOnInit() {
    this.selectedProduct = this.productsService.selectedProduct;
    this.editProduct = this.productsService.editProduct;
  }

  onSave(){
    this.productsService.onEdit();
  }
}
