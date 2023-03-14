import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment.dev';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private HttpClient:HttpClient) { }

  getProducts(){
let url = environment.product.SHOP_APP_BASE_URL+environment.product.GET_ALL_PRODUCTS;
return this.HttpClient.get(url);
  }
  getSingleProduct(productID:string){
let url = environment.product.SHOP_APP_BASE_URL+environment.product.GET_SPECIFIC_PRODUCT+productID;
return this.HttpClient.get(url);

  }


}
