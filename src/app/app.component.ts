import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subject, interval, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
 secondes: number;
 counterSubscription: Subscription;
 constructor(){}

 ngOnInit()
 {
  const counter = interval(1000);
  this.counterSubscription = counter.subscribe(
    (value: number) => {this.secondes = value;}
  );
 }
 ngOnDestroy()
 {
   this.counterSubscription.unsubscribe();
 }

 }
