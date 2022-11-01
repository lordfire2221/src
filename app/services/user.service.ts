import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor() { }
    getData(data:string):string{
        return localStorage.getItem(data)
    }
    setData(name:string,data:any){
         localStorage.setItem(name,data)
    }
}

