import { Component, ElementRef, OnInit } from '@angular/core';
import { ListModule } from '../List-module';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-dopage',
  templateUrl: './to-dopage.component.html',
  styleUrls: ['./to-dopage.component.css']
})
export class ToDopageComponent implements OnInit {
  //dataSource: Array<ListModule> = [{ id: 12, Name: 'blue', Task: 'doe something', Date: "20" }];
  dataSource: ListModule[] = [];
  displayedColumns = ['id', 'Name', 'Task', 'Date'];
  index = ['id', 'Name', 'Task', 'Date'];
  constructor(public Addlistitem: ToDoService, public elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#C0C0C0';
    this.elementRef.nativeElement.ownerDocument.body.style.color = 'black';
    this.Addlistitem.loadTable().subscribe((result) => this.dataSource = result, err => console.log(err), () => console.log("Completed"));
  }

  AddList(newtask: any) {
    console.log(newtask);
    this.Addlistitem.storeEmployee(newtask);
    this.dataSource.push(newtask);
  }
}
