import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-PhoneBook';
  list:any[]=[]

  addContact(contact:string) {
    this.list.push({id:this.list.length,name:contact});
    console.warn(this.list)
  }

  removeContact(id:any) {
    this.list=this.list.filter(contact=>contact.id!=id)

  }
}
