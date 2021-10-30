import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { DataFromApiService } from 'src/app/Services/data-from-api.service';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { ICategory } from 'src/app/viewmodel/icategory';
import { IProduct } from 'src/app/viewmodel/iproduct';
import { ShoppingCartItems } from 'src/app/viewmodel/shopping-cart-items';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-child',
  templateUrl: './cart-child.component.html',
  styleUrls: ['./cart-child.component.scss']
})
export class CartChildComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  // productList: IProduct[];
  subscription : Subscription[] = []
  prdListForSelCat: IProduct[]=[];
  totalOrderPrice: number
  samsungCategory: ICategory;
  xiaomiCategory: ICategory;
  amountToBuy:any
  shopCartAllItems : ShoppingCartItems[] = []
  shopCartItem : ShoppingCartItems
  @Input() selectedCategoryFromNested: number = 0;
  // @output() totalPriceChanged : EventEmitter<number> = new EventEmitter <number>();
  @Output() totalPriceChanged: EventEmitter <number>= new EventEmitter<number>();
  @ViewChild("boughtCount") boughtCount! : ElementRef
  // this.boughtCount.nativeElement.value
  boughtCountValue(){
    // this.boughtCount.nativeElement
    console.log(this.boughtCount.nativeElement.value);
  }
  oneSoldSoDecrease(i: number) {
    this.productService.getAllProducts()[i].Quantity--;
  // this.amountToBuy++
    // i-1
    // console.log(i)
  }
  increseQuantityToBuy(){
    // for (let i = 0; i < this.productList.length; i++) {}
    // this.productList[i].Quantity++;
    this.amountToBuy  = this.amountToBuy + 1
    console.log(this.amountToBuy)
  }
  decreaseQuantityToBuy(){
    this.amountToBuy  = this.amountToBuy - 1
    console.log(this.amountToBuy)
  }

  calcTotalPrice(itemPrice:any, itemCount:any)
  {
    // this.totalOrderPrice+= (itemPrice as number*itemCount as number);
    // this.totalOrderPrice+= (parseInt(itemPrice)*parseInt(itemCount));
    this.totalOrderPrice+= (+itemPrice*+itemCount);
    this.totalPriceChanged.emit(this.totalOrderPrice);
  }

  addToShopCartAllItems(){
    // this.shopCartAllItems.push(this.shopCartItem)
    // console.log(this.shopCartAllItems)
  }
  constructor(private productService: ProductsServiceService, private httpServer : DataFromApiService) {

    this.totalOrderPrice= 0;
    this.amountToBuy = 0;
    this.samsungCategory = {
      ID: 1,
      Name: 'samsung',
    };
    this.xiaomiCategory = {
      ID: 2,
      Name: 'xiaomi',
    };
    // this.productList = [
    //   {
    //     ID: 1,
    //     Name: 'samsung A52 ',
    //     Quantity: 5,
    //     Price: 50,
    //     Img: 'assets/phone1.jpg',
    //     CateogryID:  1,
    //     clientID: '29702012700818',
    //   },
    //   {
    //     ID: 2,
    //     Name: 'samsung A72',
    //     Quantity: 1,
    //     Price: 50,
    //     Img: 'assets/phone2.jpg',
    //     CateogryID: 1,
    //     clientID: '29702012700818',
    //   },
    //   {
    //     ID: 3,
    //     Name: 'samsung A32',
    //     Quantity: 10,
    //     Price: 50,
    //     Img: `assets/phone3.jpg`,
    //     CateogryID:1,
    //     clientID: '29702012700818',
    //   },
    //   {
    //     ID: 4,
    //     Name: 'samsung A22',
    //     Quantity: 5,
    //     Price: 50,
    //     Img: 'assets/phone4.jpg',
    //     CateogryID: 1,
    //     clientID: '29702012700818',
    //   },
    //   {
    //     ID: 5,
    //     Name: 'xiaomi note 9',
    //     Quantity: 1,
    //     Price: 50,
    //     Img: 'assets/phone5.jpg',
    //     CateogryID: 2,
    //     clientID: '29702012700818',
    //   },
    //   {
    //     ID: 6,
    //     Name: 'xiaomi note 10',
    //     Quantity: 0,
    //     Price: 50,
    //     Img: 'assets/phone2.jpg',
    //     CateogryID: 2,
    //     clientID: '29702012700818',
    //   },
    //   {
    //     ID: 7,
    //     Name: 'xiaomi note 10 s',
    //     Quantity: 5,
    //     Price: 50,
    //     Img: 'assets/phone1.jpg',
    //     CateogryID: 2,
    //     clientID: '29702012700818',
    //   },
    //   {
    //     ID: 8,
    //     Name: 'xiaomi note 10 pro',
    //     Quantity: 0,
    //     Price: 50,
    //     Img: 'assets/phone3.jpg',
    //     CateogryID: 2,
    //     clientID: '29702012700818',
    //   },
    // ];
    this.shopCartItem = {
      productID: 7,
      productName: "xiaomi note 10 s",
      unitPrice: 50,
      selectedQuantity: this.amountToBuy
    }
  }
  ngOnDestroy(): void {
    for (const sub of this.subscription) {
sub.unsubscribe();
console.log('unsubscribe successfully')
    }
  }
  ngAfterViewInit(): void {
this.boughtCount.nativeElement.style.backgroundColor =" #000"
  }
  ngOnChanges(changes: SimpleChanges): void {
    let sub1 , sub2;
    if (this.selectedCategoryFromNested != 0) {
      // this.prdListForSelCat = this.productService.getProductsByCatID(this.selectedCategoryFromNested)
      sub1 = this.httpServer.getProductsByCatID(this.selectedCategoryFromNested)

      .subscribe((products)=>{
        this.prdListForSelCat = products
      })
      this.subscription.push(sub1)

    } else {
      // this.prdListForSelCat=Array.from(this.productList)
      // this.prdListForSelCat=this.productService.getAllProducts()
      sub2 =  this.httpServer.getAllProducts().subscribe((products)=>{
        this.prdListForSelCat = products;
        //
      })
      this.subscription.push(sub2)
      // =this.productService.getAllProducts()

    }
    // this.httpServer.getProductByID().subscribe((product)=>{

    // })
  }
  addProduct(){

    let sub3 =  this.httpServer.addProduct(33).subscribe((product)=>{
      this.prdListForSelCat.push(product);

    })
  }

  ngOnInit(): void {
  }

}
