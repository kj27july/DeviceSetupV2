import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate
{
  isLoggedin:boolean;
  static currentUser:string;
 // isVisitedDevicelist:boolean;
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean
      {
      return this.isLoggedin; 
    }
  constructor() { 
    this.isLoggedin=false;
  }
  authenticate(username:string,password:string)
  {
    
    //this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    AuthService.currentUser=username;
   var userInfo:string=localStorage.getItem(username)||'{}';
    if(userInfo)
    {   
      if(JSON.parse(userInfo)[0]==password)
      {
        this.isLoggedin=true;
        return true;
      }
      else
      {
        alert("password doesn't match");
        return false;
      }
    }
    else
    {
      alert("username doesn't exit");
      return false;
    }
  }
  getPermission(findPermission:string):number
  {
    var role:string=JSON.parse(localStorage.getItem(AuthService.currentUser))[1];
    var val:number= JSON.parse(localStorage.getItem(role)).indexOf(findPermission);
    console.log(val);
    return val;
    
  }

}
