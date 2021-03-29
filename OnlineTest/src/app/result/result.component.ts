import { Component, ElementRef, OnInit } from '@angular/core';
import { McqService } from '../mcq.service';
import { quizmodule } from '../quizmodule';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  questionList: Array<quizmodule> = [];

  constructor(public quiz: McqService, public elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#202020';
    this.elementRef.nativeElement.ownerDocument.body.style.color = 'white'
    this.quiz.loadQuestions().subscribe(result => { this.questionList = result; showAnswer(this.questionList); }, err => console.log(err), () => console.log("Completed"));

  }

  retakeQuiz() {
    sessionStorage.clear();
    window.location.href = 'StartQuiz';
  }

}

function showAnswer(questionlist: any) {
  let check: number = 0;
  for (let i = 0; i < 10; i++) {
    let q0 = document.createElement('div');
    let q1 = document.createElement('div');
    let q2 = document.createElement('div');
    let q3 = document.createElement('div');
    let q4 = document.createElement('div');
    q1.id = 'A1';
    q2.id = 'A2';
    q3.id = 'A3';
    q4.id = 'A4';
    q1.style.paddingRight = '10px'
    q1.style.width = "500px";
    q2.style.width = '500px';
    q3.style.width = '500px';
    q4.style.width = '500px';
    q1.style.margin = '20px';
    q2.style.margin = '20px';
    q3.style.margin = '20px';
    q4.style.margin = '20px';
    q0.innerHTML = (i + 1) + '. ' + questionlist[i].Qnumber;
    q1.innerHTML = questionlist[i].choiceA;
    q2.innerHTML = questionlist[i].choiceB;
    q3.innerHTML = questionlist[i].choiceC;
    q4.innerHTML = questionlist[i].choiceD;
    q0.appendChild(q1);
    q0.appendChild(q2);
    q0.appendChild(q3);
    q0.appendChild(q4);
    q0.appendChild(document.createElement('br'));
    q0.appendChild(document.createElement('br'));
    document.getElementById('contain')?.appendChild(q0);
    let Anskey = sessionStorage.getItem("Ans" + (i + 1));

    if (questionlist[i].correct != Anskey) {
      console.log('I was here ' + Anskey + i);
      if (Anskey == 'A') q1.style.border = '2px solid red'
      if (Anskey == 'B') q2.style.border = '2px solid red'
      if (Anskey == 'C') q3.style.border = '2px solid red'
      if (Anskey == 'D') q4.style.border = '2px solid red'
      if (questionlist[i].correct == 'A') q1.style.border = ' 2px solid green'
      if (questionlist[i].correct == 'B') q2.style.border = ' 2px solid green'
      if (questionlist[i].correct == 'C') q3.style.border = ' 2px solid green'
      if (questionlist[i].correct == 'D') q4.style.border = ' 2px solid green'
    }

    else {
      if (Anskey == 'A') q1.style.border = '2px solid green'
      if (Anskey == 'B') q2.style.border = '2px solid green'
      if (Anskey == 'C') q3.style.border = '2px solid green'
      if (Anskey == 'D') q4.style.border = '2px solid green'
      check++;
    }
  } console.log("how many are right " + check);

  let score = document.createElement('div');
  let grade = document.createElement('span');
  let result = 'FAIL';
  if (check > 6) result = 'PASS'
  grade.innerHTML = 'Score: ' + check + '/10  ' + result;
  score.appendChild(grade);
  document.getElementById('contain')?.appendChild(score);


}