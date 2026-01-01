import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service'; 
import { FilteredValue } from '../../states/product.state';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  constructor(private productService:ProductsService){}

  showAll(){
     this.productService.setFilter(FilteredValue.All);
  }
  showSelected(){
    this.productService.setFilter(FilteredValue.Selected);
  }
  showAvailable(){
    this.productService.setFilter(FilteredValue.available);
  }

  onSearch(keyword:string){
    this.productService.setKeyword(keyword);
   
  }

}
