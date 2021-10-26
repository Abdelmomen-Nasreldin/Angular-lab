import { IProduct } from './../../viewmodel/iproduct';
import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/viewmodel/store';
import { MyData } from '../shared/my-data';
import { ICategory } from 'src/app/viewmodel/icategory';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  mydata: MyData = {
    name: 'Abdelmomen',
    age: 24,
    favorite: ['football', 'swimming', 'fruits', 'mo'],
  };
  clientName: string;
  store1 = new Store('mobileShop', ['cairo'], 'https://fakeimg.pl/100/');
  productList: IProduct[];
  samsungCategory: ICategory;
  xiaomiCategory: ICategory;
  categoryList: ICategory[];
  selectedCategory: number = 0;

  // };
  isTableHidden: boolean = true;
  showIDTable: boolean = true;
  toggleSold() {
    // this.isTableHidden = !this.isTableHidden;
  }
  // selectpro: IProduct[] = [];
  getValue(id: number) {
    this.selectedCategory = id;
  }
  selectedCategoryproducts() {
    if (this.selectedCategory != 0) {
      return this.productList.filter(
        (item) => item.CateogryID == this.selectedCategory
      );
    } else {
      return this.productList;
    }
  }

  oneSoldSoDecrease(i: number) {
    this.productList[i].Quantity--;
  }
  // productDetails(id: number){

  // }
  constructor() {
    // this.selectedCategory = 0;
    this.samsungCategory = {
      ID: 1,
      Name: 'samsung',
    };
    this.xiaomiCategory = {
      ID: 2,
      Name: 'xiaomi',
    };
    this.categoryList = [
      { ID: 1, Name: 'samsung' },
      { ID: 2, Name: 'xiaomi' },
    ];
    this.clientName = '';
    this.productList = [
      {
        ID: 1,
        Name: 'samsung A52 ',
        Quantity: 5,
        Price: 50,
        Img: 'assets/phone1.jpg',
        CateogryID: this.samsungCategory.ID,
        clientID: '29702012700818',
      },
      {
        ID: 2,
        Name: 'samsung A72',
        Quantity: 1,
        Price: 50,
        Img: 'assets/phone2.jpg',
        CateogryID: this.samsungCategory.ID,
        clientID: '29702012700818',
      },
      {
        ID: 3,
        Name: 'samsung A32',
        Quantity: 10,
        Price: 50,
        Img: `assets/phone3.jpg`,
        CateogryID: this.samsungCategory.ID,
        clientID: '29702012700818',
      },
      {
        ID: 4,
        Name: 'samsung A22',
        Quantity: 5,
        Price: 50,
        Img: 'assets/phone4.jpg',
        CateogryID: this.samsungCategory.ID,
        clientID: '29702012700818',
      },
      {
        ID: 5,
        Name: 'xiaomi note 9',
        Quantity: 1,
        Price: 50,
        Img: 'assets/phone5.jpg',
        CateogryID: this.xiaomiCategory.ID,
        clientID: '29702012700818',
      },
      {
        ID: 6,
        Name: 'xiaomi note 10',
        Quantity: 0,
        Price: 50,
        Img: 'assets/phone2.jpg',
        CateogryID: this.xiaomiCategory.ID,
        clientID: '29702012700818',
      },
      {
        ID: 7,
        Name: 'xiaomi note 10 s',
        Quantity: 5,
        Price: 50,
        Img: 'assets/phone1.jpg',
        CateogryID: this.xiaomiCategory.ID,
        clientID: '29702012700818',
      },
      {
        ID: 8,
        Name: 'xiaomi note 10 pro',
        Quantity: 0,
        Price: 50,
        Img: 'assets/phone3.jpg',
        CateogryID: this.xiaomiCategory.ID,
        clientID: '29702012700818',
      },
    ];
  }

  ngOnInit(): void {}
}
