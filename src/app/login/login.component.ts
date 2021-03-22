import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Validators,FormBuilder} from '@angular/forms'
import { AuthService } from './../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit { 
  constructor(
    private formBuilder:FormBuilder,private authService:AuthService)
        { 
        localStorage.setItem('kajal',JSON.stringify(['kajal','admin']));
        localStorage.setItem('sonam',JSON.stringify(['sonam','user']));
        localStorage.setItem('admin',JSON.stringify(['Create Device','Edit Device','Delete Device']));
        localStorage.setItem('user',JSON.stringify(['Create Device','Edit Device']));
      }
      get userName()
      {
        return this.userForm.get('username');
      }
      get passWord()
      {
        return this.userForm.get('password');
      }
      userForm=this.formBuilder.group(
        {
        username:['',[Validators.required,Validators.minLength(2),Validators.maxLength(30)]],
        password:['',[Validators.required,Validators.minLength(2),Validators.maxLength(30)]] 
        }
      );

      ngOnInit(): void 
      {
      }

      onLogin()
       {
  //  return this.authService.authenticate((this.userName||{}).value,(this.passWord||{}).value);
 
   return this.authService.authenticate(this.userName.value,this.passWord.value);
       }



  // userForm:FormGroup;
  // constructor() { }

  // ngOnInit()  {
  //  // step-2
  //   this.userForm=new FormGroup({
  //     username:new FormControl(),
  //     password:new FormControl()
  //   });
  // }
  // onLogin():void{
  //   console.log(this.userForm.value)}
}


  