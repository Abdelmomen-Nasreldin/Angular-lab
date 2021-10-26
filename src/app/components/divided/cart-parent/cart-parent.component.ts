import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { ICategory } from 'src/app/viewmodel/icategory';
import { IProduct } from 'src/app/viewmodel/iproduct';
import { Store } from 'src/app/viewmodel/store';
import { CartChildComponent } from '../cart-child/cart-child.component';

@Component({
  selector: 'app-cart-parent',
  templateUrl: './cart-parent.component.html',
  styleUrls: ['./cart-parent.component.scss']
})
export class CartParentComponent implements OnInit, AfterViewInit, AfterViewInit {
  @ViewChild(CartChildComponent) CartChild! : CartChildComponent
  clientName: string;
  store1 = new Store('mobileShop', ['cairo'], 'https://fakeimg.pl/100/');
  totalPriceForBoughtItems: number ;
  categoryList: ICategory[];
  selectedCategory: number = 0;
  getValue(id: any) {
    this.selectedCategory = id;
    // this.productService.getProductByID = id;
  }

  isTableHidden: boolean = true;
  showIDTable: boolean = true;

  toggleSold() {
    this.isTableHidden = !this.isTableHidden;
  }
  onTotalPriceChanged(OrderTotalPrice:number)
  {
    this.totalPriceForBoughtItems=OrderTotalPrice;
  }
  constructor(private productService :ProductsServiceService) {
    this.totalPriceForBoughtItems= 0;
    this.clientName = '';
    this.categoryList = [
      { ID: 1, Name: 'samsung' },
      { ID: 2, Name: 'xiaomi' },
    ];
    this.categoryList = [
      { ID: 1, Name: 'samsung' },
      { ID: 2, Name: 'xiaomi' },
    ];
    this.clientName = '';


  }
  ngAfterViewInit(): void {
   console.log(this.CartChild.xiaomiCategory.Name)
  }

  ngOnInit(): void {
  }

}
