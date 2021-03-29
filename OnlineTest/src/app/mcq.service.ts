import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { quizmodule } from './quizmodule';
@Injectable({
  providedIn: 'root'
})
export class McqService {

  constructor(public http: HttpClient) {
  }

  loadQuestions(): Observable<quizmodule[]> {
    return this.http.get<quizmodule[]>('./assets/Question.json');
  }
}