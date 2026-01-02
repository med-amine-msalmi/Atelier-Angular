import {  Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'console';
@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  
  product!: Product | null;
  productFormGroup!:FormGroup;
  submitted:boolean=false;
  constructor(private productService:ProductsService,private formBuilder:FormBuilder){}

  ngOnInit(){

    this.productFormGroup=this.formBuilder.group({
      name:["",Validators.required],
      price:[0,Validators.required],
      quantity:[0,Validators.required],
      selected:[true],
      available:[true]


    })
    
    
    }
    //handle Form Submit 

    onSaveProduct(){
      this.submitted=true;

      if(this.productFormGroup.invalid) return;
      this.productService.save(this.productFormGroup.value).subscribe((data)=>{
        this.submitted=false;
        this.productFormGroup.reset();
        alert("Product Saved!");
      },(error)=>{
        console.log(error);
        alert("Failed to Save Product ,try again");
      })
      
    }
    
    

   //cal api 

  //

}
