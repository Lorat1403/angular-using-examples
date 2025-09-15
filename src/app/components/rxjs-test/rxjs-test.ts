import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-test',
  imports: [],
  templateUrl: './rxjs-test.html',
  styleUrl: './rxjs-test.scss'
})
export class RxjsTest implements OnInit {

 // Приклад створення Observable з одним значенням
  observableFirst = new Observable(subscriber => {
    subscriber.next('First RxJS');
    subscriber.complete();
  });

  // Приклад створення Observable з кількома значеннями  і оператором of
  observableSecond = of('first value', 'second value', 'third value');

  // Приклад створення Observable з масиву значень і оператором from
  observableThird = from(['first', 'second', 'third']);

  // Приклад створення Observable з масиву чисел і оператором from
  observableFourth = from([1, 2, 3, 4]);

  //Приклад створення Observable який випускає кілька значень а потім створює помилку
  observableFifth = new Observable<string>(subscriber => {
    subscriber.next('start of thread');
    subscriber.next('обробка даних');
    subscriber.error('Щось пішло не так!');
    subscriber.next('end of thread');// Це значення не буде надіслано через помилку вище
    subscriber.complete();
})
  
  ngOnInit(): void {
      // Підписка на Observable і обробка отриманих значень
    this.observableFirst.subscribe({
      next: (value) => console.log('Значення observableFirst:', value),
      error: (err) => console.error('Помилка в observableFirst:', err),
      complete: () => console.log('observableFirst завершено')
    });


// Підписка на ObservableSecond 
    // this.observableSecond.subscribe({
    //   next: (value) => console.log('Значення observableSecond:', value),
    //   complete: () => console.log('observableSecond завершено')
    // });

// Підписка на ObservableThird 
    this.observableThird.subscribe({
      next: (value) => console.log('Значення observableThird:', value),
      complete: () => console.log('observableThird завершено')
    });


// Підписка на ObservableFourth
    // this.observableFourth.subscribe(value => console.log('Значення observableFourth:', value));
   
// Підписка на ObservableFifth
    // this.observableFifth.subscribe({
    //   next: (value) => console.log('Значення observableFifth:', value),
    //   error: (err) => console.error('Помилка в observableFifth:', err),
    //   complete: () => console.log('observableFifth завершено')
    // });
  }
}
