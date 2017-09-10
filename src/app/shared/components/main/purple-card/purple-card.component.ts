import {Component} from '@angular/core';

/** App Models **/
import { PurpleCardOptionModel } from './purple-card-option.model';

@Component({
  selector: 'app-purple-card',
  templateUrl: './purple-card.component.html',
  styleUrls: ['./purple-card.component.scss']
})

export class PurpleCardComponent {

  private options: PurpleCardOptionModel[] = [
    { title : 'Click per Object' },
    { title : 'Views per Object' },
    { title : 'Objects selected' },
    { title : 'Objects viewed' }
  ];

}
