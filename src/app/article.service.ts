import { Injectable } from '@angular/core';
import { article } from './articleClass';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  lesArticles:article[]= [
    new article("article1","article1.jpg",200 ,5,"type1",'27/10/2018',true,40),
    new article("article2","article2.jpg",4500 ,10,"type2",'21/02/2019',true,10),
    new article("article3","article3.jpg",2054 ,15,"type3","01/01/2020",false,0),
    new article("article4","article4.jpg",2010 ,5,"type4","14/07/2017",false,0)
  ];

  getEmployeByMatricule(mat : number){
      
    for(let i=0;i<this.lesArticles.length;i++)
    {
    if(this.lesArticles[i].matricule==mat)
    {
      return (this.lesArticles[i]);
    }
  }
 }

addEmployee2(a:String,b:String,c: number,d:number,e: String,f: String,g: boolean,h: number)
  {
    this.lesArticles.push(new article(a,b,c,d,e,f,g,h));
  }

updateEmployee(a:String,b:String,c: number,d:number,e: String,f: String,g: boolean,h: number)
  {} 

  constructor() { }
}
