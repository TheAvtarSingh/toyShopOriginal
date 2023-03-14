import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
productResult:any;
productList : any;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(){
this.productService.getProducts().subscribe((data :any)=>{
this.productResult = data;
this.productList = this.productResult.results;
console.log(this.productList);
})
  }
  // assets/images/222.jpg
}
