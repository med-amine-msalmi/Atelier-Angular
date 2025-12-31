import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ProductsService } from '../../services/products.service';
import { combineLatest } from 'rxjs';
import { FilteredValue } from '../../states/product.state';
@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products:Product[]=[];
  constructor(private productService:ProductsService){
  }

  ngOnInit():void{
    combineLatest([ this.productService.filter$]).subscribe(([filter])=>{
      switch(filter){
        case(FilteredValue.All):
           this.loadAllProducts();
           break;
        case(FilteredValue.Selected):
            this.getSelectedProducts();
            break;
        case(FilteredValue.available):
            this.getAvailableProducts();
      }
    }
      
    )
   
    
   }

  loadAllProducts(){
     this.productService.getAllProducts().subscribe((data)=>this.products=data);
  }

  getSelectedProducts(){
    this.productService.getSelectedProducts().subscribe((data)=>this.products=data);

  }
  getAvailableProducts(){
    this.productService.getAvailableProducts().subscribe((data)=>this.products=data);

  }

  onDelete(product:Product){
    if(confirm('Delete this product?')){
      this.productService.deleteProduct(product).subscribe(()=>{
        this.products=this.products.filter((p)=>p.id!=product.id)
      })
    }
  }

}
