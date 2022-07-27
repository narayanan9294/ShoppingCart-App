import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {

  constructor(public pdtSer: ProductsService, public myRouter: Router) { }

  ngOnInit(): void {
    this.pdtSer.getMyCartProducts().subscribe({
      next:(data:any[])=>{
        console.log(data);
      },error:(error:any)=>{
        console.log(error)
        if(error.status ===401){
          localStorage.clear();
          this.myRouter.navigateByUrl('/login')
        }
      }
    })
  }

}
