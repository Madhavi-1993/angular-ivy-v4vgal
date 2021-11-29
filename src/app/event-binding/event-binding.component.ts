import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent implements OnInit {
  constructor() {}
  public greeting = '';
  greetFun(event) {
    console.log(event);
    this.greeting = 'Hello Madhavi greet';
  }

  ngOnInit() {}
}
