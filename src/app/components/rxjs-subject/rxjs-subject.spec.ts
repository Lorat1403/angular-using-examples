import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSubject } from './rxjs-subject';

describe('RxjsSubject', () => {
  let component: RxjsSubject;
  let fixture: ComponentFixture<RxjsSubject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsSubject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsSubject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
