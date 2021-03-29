import { Component, ElementRef, OnInit } from '@angular/core';
import { McqService } from '../mcq.service';
import { quizmodule } from '../quizmodule';

var Qlist: Array<quizmodule>;
@Component({
  selector: 'app-quiz-time',
  templateUrl: './quiz-time.component.html',
  styleUrls: ['./quiz-time.component.css']
})

export class QuizTimeComponent implements OnInit {
  public questionList: Array<quizmodule> = [];
  constructor(public quiz: McqService, public elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#A9A9A9';
    this.quiz.loadQuestions().subscribe(result => { this.questionList = result; showQuestions(this.questionList) }, err => console.log(err), () => console.log("Completed"));

  }

  nextQuestion(questionL: any) {
    i++;
    let show = document.getElementById('prevButton');
    let nextspot = document.getElementById('nextD');
    if (i > 0) {
      if (show) show.style.display = 'block';
      if (nextspot) nextspot.style.left = '625px';
    }
    else {
      if (show) show.style.display = 'none';
      if (nextspot) nextspot.style.left = '750px';
    }
    check();
    showQuestions(questionL);

  }

  prevQuestion(questionL: any) {
    i--;
    let show = document.getElementById('prevButton');
    let nextspot = document.getElementById('nextD');
    console.log("i was here " + i);
    if (i > 0) {
      if (show) show.style.display = 'block';
    }
    else {
      if (show) show.style.display = 'none';
      if (nextspot) nextspot.style.left = '750px';
    }
    check();
    showQuestions(questionL);

  }

  finish() {
    i++;
    check();
    window.location.href = 'result';
  }
}



var i = 0;
function showQuestions(questionL: any) {

  let q = document.getElementById('A0');
  if (q) q.innerHTML = (i + 1) + '. ' + questionL[i].Qnumber;
  let ans1 = document.getElementById('A11');
  if (ans1) ans1.innerHTML = questionL[i].choiceA;
  let ans2 = document.getElementById('A22');
  if (ans2) ans2.innerHTML = questionL[i].choiceB;
  let ans3 = document.getElementById('A33');
  if (ans3) ans3.innerHTML = questionL[i].choiceC;
  let ans4 = document.getElementById('A44');
  if (ans4) ans4.innerHTML = questionL[i].choiceD;
  if (i == 9) {
    finalQ(questionL);
  }

}



function finalQ(questionL: any) {
  let finishbutton = document.getElementById('nextButton');
  if (finishbutton) finishbutton.style.display = 'none';
  finishbutton = document.getElementById('finishButton');
  if (finishbutton) {
    finishbutton.style.display = 'block';
    let s = document.getElementById('doneDiv');
    if (s) s.style.left = '625px'
  }

}

function check() {
  let radios = document.getElementsByTagName('input');

  for (let j = 0; j < 4; j++) {
    if (radios[j].checked == true) {
      sessionStorage.setItem('Ans' + i, radios[j].value);
      radios[j].checked = false;
    }
  }
}

function result(questionL: any) {
  check();
  console.log('We done')
}

