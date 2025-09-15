import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, delay, filter, forkJoin, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.html',
  styleUrl: './rxjs-operators.scss'
})
export class RxjsOperators implements OnInit {

  behaviorSubject = new BehaviorSubject<number>(0);

  observable1 = of('Запит 1').pipe(delay(1000)); // Імітація запиту з затримкою 1 секунда
  observable2 = of('Запит 2').pipe(delay(500)); // Імітація запиту з затримкою 500 мілісекунд
  observable3 = of('Запит 3').pipe(delay(2000)); // Імітація запиту з затримкою 2 секунди

//Використання forkJoin для комбінації кількох Observable
  combined = forkJoin([this.observable1, this.observable2, this.observable3]);

  ngOnInit(): void {

    //Використання tap для ведення журналу значень(дебагінгу чи відстеження), filter-залишить значення більші за 0, map-помножить на 10 кожне значення
    this.behaviorSubject.pipe(tap(value => console.log('Перед обробкою:', value)),
      filter(value => value > 0), map(value => value * 10),).subscribe({
        next: (value) => console.log('Оброблене значення:', value), complete: () => console.log('Обробка завершена')
      });
    
    // Випуск нових значень
    this.behaviorSubject.next(1);
    this.behaviorSubject.next(2);
    this.behaviorSubject.next(-1); // Це значення буде відфільтроване
    this.behaviorSubject.next(3);

    this.behaviorSubject.complete();

    // Підписка на комбінований Observable
    this.combined.subscribe({
      next: ([res1, res2, res3]) => {
        console.log('Результати forkJoin:', res1, res2, res3);
      },
      complete: () => console.log('Всі запити завершені')
    });
    
  }

}
