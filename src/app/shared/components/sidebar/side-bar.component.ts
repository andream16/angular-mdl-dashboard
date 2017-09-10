import {Component} from '@angular/core';

/** App Models */
import { NavigationLinkModel } from './side-bar.models';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})

export class SideBarComponent {

  private profileDropdown: NavigationLinkModel[] = [
    { image : '', title : 'hello@example.com' },
    { image : '', title : 'info@example.com' },
    { image : 'add', title : 'Add another account ...' },
  ];

  private navigationLinks: NavigationLinkModel[] = [
    { image : 'home', title : 'Home' },
    { image : 'inbox', title : 'Inbox' },
    { image : 'delete', title : 'Trash' },
    { image : 'report', title : 'Spam' },
    { image : 'forum', title : 'Forums' },
    { image : 'flag', title : 'Updates' },
    { image : 'local_offer', title : 'Promos' },
    { image : 'shopping_cart', title : 'Purchases' },
    { image : 'people', title : 'Social' },
    { image : 'help_outline', title: '' },
  ];

}
