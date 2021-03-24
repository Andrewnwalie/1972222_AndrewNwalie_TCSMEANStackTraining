import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user = sessionStorage.getItem('user1');
  constructor() { }

  ngOnInit(): void {
  }


  addInfo(contact: any) {
    let table = document.getElementById('table');
    let rows = document.createElement('div');
    let col1 = document.createElement('div');
    let col2 = document.createElement('div');
    rows.className = 'row';
    col1.className = 'col';
    col2.className = 'col';
    let contacts = contact.value;
    col1.innerHTML = contacts.cName;
    col2.innerHTML = contacts.cNum;
    col1.style.border = "solid white 2px"
    col2.style.border = "solid white 2px"
    rows.appendChild(col1);
    rows.appendChild(col2);
    table?.appendChild(rows);
    this.clearFunc();
  }

  clearFunc() {
    (<HTMLInputElement>document.getElementById('cName')).value = '';
    (<HTMLInputElement>document.getElementById('cNum')).value = '';
  }

}
