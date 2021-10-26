import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIDComponent } from './product-id.component';

describe('ProductIDComponent', () => {
  let component: ProductIDComponent;
  let fixture: ComponentFixture<ProductIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
