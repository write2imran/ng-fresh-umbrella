import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'lib-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent {
  
  date = moment.now();

}
