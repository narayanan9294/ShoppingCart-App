
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
categories: any[] = [];
  constructor( public pdtSer: ProductsService, public myRouter: Router ) { }




  
  ngOnInit(): void {
          this.pdtSer.getCategories().subscribe({next: (data:any[])=>{
        console.log(data);
        this.categories = data;
      },error:(error:string)=>{
        console.log(error)
      } })
    }
  }

  



// this.userSer.userLogin(this.loginForm.value).subscribe({next:(data:string)=>{
//   console.log(data);
//   if(data.length>0){
//     localStorage.setItem("loggeduser",data);
// this.myRouter.navigateByUrl('/');

//     this.loginForm.reset();
//   }else{
//     this.msg="Invalid Username/password"
//   }
 
// },error:(error:any)=>{
//   console.log(error);
//   this.msg="Something Went Wrong , Please Try After Sometime"
// }})
//  this.loginForm.reset();
//   }