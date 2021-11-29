import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style-binding',
  templateUrl: './class-style-binding.component.html',
  styleUrls: ['./class-style-binding.component.css'],
})
export class ClassStyleBindingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public successClass = 'text-success';
  public hasError = false;
  public isSpecial = true;
  public heigletghtColor = 'orange';
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };

  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic',
  };
}
