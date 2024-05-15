import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {

  @Input() passNumber:number = 0

  @Output() numberEmitter = new EventEmitter<number>();

  // resets the data locally
  resetNumber() {
    this.passNumber = 0
  }

  resetNumberEmitter() {
    this.numberEmitter.emit(0)
  }

}
