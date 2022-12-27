import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productsingle',
  templateUrl: './productsingle.component.html',
  styleUrls: ['./productsingle.component.css'],
})
export class ProductsingleComponent implements OnInit {
  productID: string = '';
  productDetails: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.productID = data.id;
    });
    this.productService.getSingleProduct(this.productID).subscribe((data:any) => {
      this.productDetails = data.results;
      console.log(this.productDetails.results);
    });
  }
}
