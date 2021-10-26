import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { IProduct } from 'src/app/viewmodel/iproduct';
import {Location} from '@angular/common'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.scss']
})
export class ProductIDComponent implements OnInit, OnDestroy {
productID : number = 0
totalProducts : number = 0
product : IProduct| undefined
productListLength : number = 0
subscribtions : Subscription[] = []
// disableNextButton! : any
  constructor(
    private activatedRoute : ActivatedRoute,
    private productService : ProductsServiceService,
    private router : Router,
    private location : Location
  ) { }

  ngOnInit(): void {
   let subscibeOne:Subscription = this.activatedRoute.paramMap.subscribe(
      (paramMap)=>{
        this.productID = Number(paramMap.get("id"))
        this.totalProducts = Number(paramMap.get("totalProducts"))

        this.product = this.productService.getProductByID(this.productID)
      },
      (err)=>{console.log(err);}

    )
    this.subscribtions.push(subscibeOne)
  //  this.disableNextButton = (this.productService.getProductByID(this.productID))? true : false;

    // this.productListLength = this.productService.getAllProducts.length
  }
  goBack(){
this.location.back()
  }
  previousProduct(){
    this.router.navigate(['/Products/', --this.productID, this.totalProducts])
  }
  nextProduct(){
this.router.navigate(['/Products/', ++this.productID, this.totalProducts])
  }
  disableNextButton(prd_id: any){
      return !this.productService.getProductByID(prd_id+1) ? true : false;
  }

  ngOnDestroy(): void {
    for (const sub of this.subscribtions) {
      sub.unsubscribe();
    }
  }

}
