import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'showcase';


   eval(evaluation: string, times:number=1) {
    return eval(evaluation)*times;
   }  
}
