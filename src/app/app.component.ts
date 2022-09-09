import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My To Do List';
  placeholder = 'Title...';
  flag = false;
  todoText = '';

  myNodelist = [
    {
      Status: false,
      Things: 'Pay bills'
    },
    {
      Status: false,
      Things: 'Meet George'
    },
    {
      Status: false,
      Things: 'Buy eggs'
    },
    {
      Status: false,
      Things: 'Read a book'
    },
    {
      Status: false,
      Things: 'Organize office'
    }
  ]

  newElement() {
    console.log('hi');

  }
  changeFlag(item: any) {
    item.Status = !item.Status;
  }

  deleteItem(num: number) {
    console.log(num);
    this.myNodelist.splice(num, 1)

  }

  addItem() {
    if (this.todoText == "") {
      alert('You must write something!')
    } else {
      this.myNodelist.push({
        Status: false,
        Things: this.todoText
      })
      this.todoText = ''
    }
  }
}
