import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { ListModule } from './List-module';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(public http: HttpClient) { }

  loadTable() {
    return this.http.get<ListModule[]>('http://localhost:3000/Users');
  }
  storeEmployee(emp: any) {
    this.http.post('http://localhost:3000/Users', emp).subscribe(result => console.log(result), error => console.log(error));
  }


}


