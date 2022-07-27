import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient, public userSer: UsersService ) { }

  getListProduts(){
   return this.http.get<any[]>("https://credo-shoppingcartv5.herokuapp.com/listproducts");
  }
// getMyCartProducts(){
//  return this.http.get<any[]>("https://credo-shoppingcartv5.herokuapp.com/mycart", {
//   'headers': new HttpHeaders({
//     'myauthtoken': this.userSer.getMyToken() ? this.userSer.getMyToken() : ''
//   })
//  })
// }
getMyCartProducts(){
   return this.http.get<any[]>("https://credo-shoppingcartv5.herokuapp.com/mycart")
  }


  getCategories(){
    return this.http.get<any[]>("https://credo-shoppingcartv5.herokuapp.com/getcategories");
  }

  getProductCategorywise(catId: string){
    return this.http.get<any[]>("https://credo-shoppingcartv5.herokuapp.com/getpdtcatwise/"+catId);
   
  }


  addProducts(data:any){
    return this.http.post("https://credo-shoppingcartv5.herokuapp.com/addproducts", data);
  }
}
