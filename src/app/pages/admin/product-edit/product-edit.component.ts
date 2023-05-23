import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {

  product!: Product
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0]
  })

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: ActivatedRoute
  ) {
    this.router.paramMap.subscribe(params => {
      const id = params.get('id');
      this.productService.getProduct(id!).subscribe(data => {
        this.product = data
        
        this.productForm.patchValue({
          name: data.name,
          price: data.price
        }
        )
      }, error => console.log(error.message))
      
    })
  }

  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: Product = {
        id: this.product.id,
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0
      }

      this.productService.updateProduct(product).subscribe((product) => {
        console.log('product', product);
        
      })
    }
  }
}
