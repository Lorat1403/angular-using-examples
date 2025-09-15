import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-rxjs-subject',
  imports: [],
  templateUrl: './rxjs-subject.html',
  styleUrl: './rxjs-subject.scss'
})
export class RxjsSubject implements OnInit {

  // Приклад створення Subject
  subjectFirst = new Subject<number>();

  // Отримання Observable з Subject //this.observable.next() видасть помилку, оскільки це Observable
  observable = this.subjectFirst.asObservable(); 

  // Початкове значення 0
  behaviorSubject = new BehaviorSubject<number>(0);

  // Зберігає останні 2 значення
  replaySubject = new ReplaySubject<number>(2);

  asyncSubject = new AsyncSubject<number>();

  ngOnInit(): void {
    // //Створення першого значення
    //     this.subjectFirst.next(1);  //this.observable.next() видасть помилку, оскільки це Observable
          
    // // Підписка першого підписника
    //     this.subjectFirst.subscribe({
    //       next: (value) => console.log('Підписник 1:', value),
    //       error: (error) => console.error('Підписник 1б поммилка:', error),
    //       complete: () => console.log('Підписник 1: Завершено'),
    //     });
    // //Створення другого значення
    //     this.subjectFirst.next(2);
    // // Підписка другого підписника
    //     this.subjectFirst.subscribe({
    //       next: (value) => console.log('Підписник 2:', value),
    //       error: (error) => console.error('Підписник 2, помилка:', error),
    //       complete: () => console.log('Підписник 2: Завершено'),
    //     });

    //     //Створення третього значення
    //     this.subjectFirst.next(3);

    //     // Завершення Subject
    //     this.subjectFirst.complete();
    //   }

//     // Приклад використання BehaviorSubject
//     this.behaviorSubject.subscribe(value => console.log('BehaviorSubject Підписник 1:', value));

//     // Випуск нових значень
//     this.behaviorSubject.next(1);
//     this.behaviorSubject.next(2);

// // Підписка другого підписника отримає останнє значення (2)
//     this.behaviorSubject.subscribe(value => console.log('BehaviorSubject Підписник 2:', value));

//     //Випуск кінцевого значення
//     this.behaviorSubject.next(3);

//     this.behaviorSubject.complete();

//   // Приклад використання ReplaySubject
//   this.replaySubject.next(1);
// this.replaySubject.next(2);
//     this.replaySubject.next(3);

//     // Підписка першого підписника отримає останні 2 значення (2, 3)
//     this.replaySubject.subscribe(value => console.log('Підписник:', value));

//     this.replaySubject.complete();

    // Приклад використання AsyncSubject

    this.asyncSubject.next(1);
    this.asyncSubject.next(2);
    this.asyncSubject.next(3);

    // Підписка підписника отримає лише останнє значення (3) після виклику complete()
    this.asyncSubject.subscribe(value => console.log('AsyncSubject Підписник:', value));

    this.asyncSubject.next(4);
    this.asyncSubject.complete();
  }

}
 
