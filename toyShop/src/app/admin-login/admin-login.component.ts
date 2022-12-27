import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
form!:FormGroup;
message:string = '';
isProcess:boolean = false;
className = 'd-none';
  constructor(private fb:FormBuilder,private auth:AuthService) {
    this.form = this.fb.group({
      "username" : ["",Validators.required],
      "password" : ["",Validators.required],
    })
   }

  ngOnInit(): void {
  }
login(){
  this.isProcess = true;
 const data = this.form.value;
 this.auth.signin(data).subscribe((res)=>{
  if(res.success){
    this.isProcess = false;
    this.message = res.message;
    this.className = 'alert alert-success';
    this.form.reset();
  }else{
    this.isProcess = false;
    this.message = res.message;
    this.className = 'alert alert-danger'
  }
  
 },err=>{
  
  this.isProcess = false;
    this.message = "Server Error";
    this.className = 'alert alert-danger'
 })
}

}
