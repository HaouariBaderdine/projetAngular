import { Injectable } from '@angular/core';
import { compte } from './loginClass';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  lesComptes :compte[]=[
    new compte("admin","admin"),
    new compte("user","user")
  ];

  connecter(nom : String, password : String){
      
    for(let i=0;i<this.lesComptes.length;i++)
    {
    if((this.lesComptes[i].name==nom)&&(this.lesComptes[i].password==password))
    {
      return true;
    }else{
      return false;
    }
  }
 }


  constructor() { }
}
