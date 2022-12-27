import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from 'express';
// import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // registerForm:FormGroup = new FormGroup({
  //   username:new FormControl(null,[Validators.required]),
  //   email:new FormControl(null,[Validators.email,Validators.required]),
  //   password:new FormControl(null,[Validators.required]),
  //   cpassword:new FormControl(null,[Validators.required])
  // })
  constructor() { }

  ngOnInit(): void {
  }
  // register(){
  //   if(!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpassword.value)){
  //     console.log("Invalid Details");
  //     return;
  //   }
    // this._userService.register(JSON.stringify(this.registerForm.value)).subscribe((data: any)=>{
    //   {console.log(data);
    //     (<any>this._router).navigate(['/login']);}
    //   (error: any)=>console.log(error)
    // })
    // console.log(JSON.stringify(this.registerForm.value));
  }

// }
