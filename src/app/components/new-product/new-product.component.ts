import { Component, OnInit , OnChanges, SimpleChanges} from '@angular/core';
import { DataFromApiService } from 'src/app/Services/data-from-api.service';
import { IProduct } from 'src/app/viewmodel/iproduct';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit, OnChanges {
newProduct : IProduct;
// addNew! :IProduct;
  constructor(private DataFromApi : DataFromApiService) {
    this.newProduct =
    {
          ID: 22,
          Name: 'New Product Component',
          Quantity: 22,
          Price: 22,
          Img: 'assets/phone3.jpg',
          CateogryID: 2,
          clientID: '29702012700818',
        }
    }
  ngOnChanges(changes: SimpleChanges): void {
    //  this.DataFromApi.addProduct(99).subscribe((product)=>{
    //   this.newProduct = product
    // })
  }
    addProduct(){
      // this.DataFromApi.addProduct(99).subscribe((product)=>{
      // this.newProduct = product
      // })
     }
     

  ngOnInit(): void {
    // this.DataFromApi.
  }

}
