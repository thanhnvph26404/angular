import { Component } from '@angular/core';
import { Product } from './interface/Product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products:Product[] = [
    {id: 1, name: 'Product A', price: 343, img: 'sfsdfsdf'},
    {id: 2, name: 'Product B', price: 343, img: 'sfsdfsdf'}
  ]
  onHandleRemove(id: string | number) {
    this.products = this.products.filter(product => product.id !== id)
  }
}

