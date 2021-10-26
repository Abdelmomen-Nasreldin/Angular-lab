import { Injectable } from '@angular/core';
import { IProduct } from '../viewmodel/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsServiceService {
  productList: IProduct[];

  oneSoldSoDecrease(i: number) {
    this.productList[i].Quantity--;
    // this.amountToBuy++
    // i-1
    // console.log(i)
  }
  constructor() {
    this.productList = [
      {
        ID: 1,
        Name: 'samsung A52 ',
        Quantity: 5,
        Price: 50,
        Img: 'assets/phone1.jpg',
        CateogryID: 1,
        clientID: '29702012700818',
      },
      {
        ID: 2,
        Name: 'samsung A72',
        Quantity: 1,
        Price: 50,
        Img: 'assets/phone2.jpg',
        CateogryID: 1,
        clientID: '29702012700818',
      },
      {
        ID: 3,
        Name: 'samsung A32',
        Quantity: 10,
        Price: 50,
        Img: `assets/phone3.jpg`,
        CateogryID: 1,
        clientID: '29702012700818',
      },
      {
        ID: 4,
        Name: 'samsung A22',
        Quantity: 5,
        Price: 50,
        Img: 'assets/phone4.jpg',
        CateogryID: 1,
        clientID: '29702012700818',
      },
      {
        ID: 5,
        Name: 'xiaomi note 9',
        Quantity: 1,
        Price: 50,
        Img: 'assets/phone5.jpg',
        CateogryID: 2,
        clientID: '29702012700818',
      },
      {
        ID: 6,
        Name: 'xiaomi note 10',
        Quantity: 0,
        Price: 50,
        Img: 'assets/phone2.jpg',
        CateogryID: 2,
        clientID: '29702012700818',
      },
      {
        ID: 7,
        Name: 'xiaomi note 10 s',
        Quantity: 5,
        Price: 50,
        Img: 'assets/phone1.jpg',
        CateogryID: 2,
        clientID: '29702012700818',
      },
      {
        ID: 8,
        Name: 'xiaomi note 10 pro',
        Quantity: 0,
        Price: 50,
        Img: 'assets/phone3.jpg',
        CateogryID: 2,
        clientID: '29702012700818',
      },
    ];
  }

  getAllProducts(): IProduct[] {
    return this.productList;
  }
  getProductsByCatID(selectedCategoryFromNested: number): IProduct[] {
    return this.productList.filter(
      (item) => item.CateogryID == selectedCategoryFromNested
    );
  }
	getProductByID(prodID : number): IProduct | undefined {
    return this.productList.find(item => item.ID == prodID)
  }
}
