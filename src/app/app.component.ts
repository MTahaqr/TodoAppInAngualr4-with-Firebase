import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/Database';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   items:FirebaseListObservable<any[]>;
   newItems: string = "" ;

   constructor(public db:AngularFireDatabase){
    this.items = db.list('/Todos');
    }
  AddItems():void {
    if(this.newItems== "")
    {
      alert("Please Enter A Todo");
    }
    else{
      this.items.push(this.newItems);
      this.newItems= "";
      // this.itemSend.update({ Todos: this.items });
    }
  }
  removeItem(key):void{
    const removeItem=this.db.list("/Todos/"+key).remove();
    removeItem.then(_ => console.log('success'))
    .catch(err => console.log(err, 'You dont have access!'));
 }
 deleteAll():void{
    const promise = this.db.list('/Todos').remove();
    promise.then(_ => console.log('success'))
    .catch(err => console.log(err, 'You dont have access!'));

  }
 

}
