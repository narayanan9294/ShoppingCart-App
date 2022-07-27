import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {

  constructor(public pdtSer : ProductsService, public activeRoute : ActivatedRoute) { }
productsLists : any[]=[];
isLoader = true;
  ngOnInit(): void {
    console.log("ListproductsComponents Created");
    this.activeRoute.params.subscribe(
      {
        next: (param: Params)=>{
          console.log(param);
if(param["catid"]){
  this.getCategorywiseProducts(param["catid"])
}else{
  this.getAllProducts()
}
        }
      }
    )

  }

  getAllProducts(){
    this.pdtSer.getListProduts().subscribe({next:(data:any[])=>{
      console.log(data);
      this.isLoader = false
      this.productsLists = data;
      
    },
  error:(error:any)=>{
    console.log(error)
  },
complete:()=>{
  console.log("Completed")
}
}
)
  }

  getCategorywiseProducts(catId: string){
    this.isLoader=true;
    this.pdtSer.getProductCategorywise(catId).subscribe({next:(data:any[])=>{
      console.log(data);
      this.isLoader = false;
      this.productsLists = data;
          },
  error:(error:any)=>{
    console.log(error);
  }, complete:()=>{
    console.log("completed");
  }

  })}
}
