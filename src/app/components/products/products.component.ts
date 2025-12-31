import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ProductsService } from '../../services/products.service';

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
    this.loadAllProducts();
   
    
   }

  loadAllProducts(){
     this.productService.getAllProducts().subscribe((data)=>this.products=data);
  }

  onDelete(product:Product){
    if(confirm('Delete this product?')){
      this.productService.deleteProduct(product).subscribe(()=>{
        this.products=this.products.filter((p)=>p.id!=product.id)
      })
    }
  }

}
