import {Component} from '@angular/core';

/** App Models **/
import { MoreButtonEntryModel } from './more-button-entry.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent {

  public moreBtnEntries: MoreButtonEntryModel[] = [
    { title : 'About' },
    { title : 'Contact' },
    { title : 'Legal Information' }
  ];

}
