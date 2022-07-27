import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
declare var $ : any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isRegister: boolean = false;
  isUsernameAvailable = false;
  isUsernameAvail = false;
msg:string ;
loginForm : FormGroup;
  constructor( public userSer: UsersService, public myRouter : Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
"Username": new FormControl(null, Validators.required),
"Password": new FormControl(null , [Validators.required,Validators.minLength(4)]) 
    });
    $('.toggle').click(()=>{
      // Switches the Icon
      $(this).children('i').toggleClass('fa-pencil');
      // Switches the forms  
      $('.form').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: "toggle"
      }, "slow");
    });
  }
get userNameCtrl(){
  return this.loginForm.get('Username')
}
get userPasswordCtrl(){
  return this.loginForm.get('Password')
}
getUserData(){
  this.loginForm.patchValue({
    'Username': 'admin'
  })
}
  doLogin(){
console.log(this.loginForm.value);
this.userSer.userLogin(this.loginForm.value).subscribe({next:(data:string)=>{
  console.log(data);
  if(data.length>0){
    localStorage.setItem("loggeduser",data);
this.myRouter.navigateByUrl('/');

    this.loginForm.reset();
  }else{
    this.msg="Invalid Username/password"
  }
 
},error:(error:any)=>{
  console.log(error);
  this.msg="Something Went Wrong , Please Try After Sometime"
}})
 this.loginForm.reset();
  }
  usernameCheck(username: string){
    this.userSer.usernameCheckAvailability(username).subscribe({next:(data: number)=>{
      if(data===0){this.isUsernameAvail=true;} else{
        this.isUsernameAvail = false;
      }
      console.log(data)},error:(error:any)=>{console.log(error);}
  
    
  })}
doRegistration(form:NgForm){
  this.userSer.userRegisteration(form.value).subscribe({
    next:(data:string)=>{
      this.msg = data;
console.log(data);
form.reset()
    },error: (error:any)=>{
      console.log(error);
    }
  })

}
}
