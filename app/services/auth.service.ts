import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  currentUser:any;
  token:any;
  constructor() { }

  getUserDetails() {
    if(localStorage.getItem('userData')){
      return localStorage.getItem('userData')
    }else{
      return null
    }
  }
  setDataInLocalStorage(variableName: string, data: any) {
      localStorage.setItem(variableName, data);
  }
  
  getToken() {
      return localStorage.getItem('token');
  }
  getData(name:string) {
    return localStorage.getItem(name);
}
  getUid() {
    return localStorage.getItem('uid');
}
  clearStorage() {
      localStorage.clear();
  }
 
}
