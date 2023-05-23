import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/interface/Product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products!: Product[];
  // @Input() products!: Product[];
  // @Output() onRemove = new EventEmitter<any>();
  // status:boolean = false
  // useName:string = ''
  // setValue(e:any) {
  //   this.useName = e.target.value
  // }
  // tongle() {
  //   this.status = !this.status
  // }

  // removeItem(id: string | number) {
  //   this.onRemove.emit(id)
  // }

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data
      
    })
  }

  removeItem(id: string | number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(products => products.id !== id)
    })
  }
  
}
