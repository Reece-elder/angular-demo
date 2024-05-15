import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // Import component into parent, nanme of component is export class name
  imports: [RouterOutlet, HelloWorldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-demo';
  // adding the number to the component
  btn_value:number = 0

  changeNumber() {
    this.btn_value = this.btn_value + 1
  }

  resetNumberParent(num: number){
    this.btn_value = num;
  }

}




