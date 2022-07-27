import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
categories: any[]= [];
msg : string;
selectedImg : any;
  constructor( public pdtSer: ProductsService) { }

  ngOnInit(): void {

    this.pdtSer.getCategories().subscribe({next: (data:any[])=>{
      console.log(data);
      this.categories = data;
    },error:(error:string)=>{
      console.log(error)
    } })
  }

  selectImage($event:any){
 console.log($event);
 this.selectedImg= $event.target.files[0]
 console.log(this.selectedImg)
  }
  createProducts(form:NgForm){
    var fd = new FormData();
    fd.append('catId', form.value.catId);
    fd.append('pdtDesc', form.value.pdtDesc);
    fd.append('pdtName', form.value.pdtPrice);
    fd.append('pdtPrice', form.value.pdtPrice);
    fd.append('pdtImg', this.selectedImg);
    this.pdtSer.addProducts(fd).subscribe({
      next: (data:any)=>{
        console.log(data);
        this.msg = data;
        form.reset();
      },error: (error:any)=>{
        console.log(error);
        this.msg="something went wrong"
      }
    })
  }
}
