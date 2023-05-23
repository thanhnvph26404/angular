import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product!: Product
  constructor(
    private productService: ProductService,
    private router: ActivatedRoute
  ) {
    this.router.paramMap.subscribe(params => {
      const id = params.get('id')
      this.productService.getProduct(id!).subscribe(data => {
        this.product = data
        
        
      }, error => console.log(error.message))
    })
  }

  onHandleSubmit() {
    console.log(this.product);
    this.productService.updateProduct(this.product).subscribe((product) => {
      console.log('product', product);
      
    })
    
  }
}
