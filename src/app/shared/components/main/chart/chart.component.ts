import {Component} from '@angular/core';

/** App Models **/
import { SvgModel } from './chart.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent {

    private svgs: SvgModel[] = [
        { amount : 82, percentage: '%' },
        { amount : 82, percentage: '%' },
        { amount : 82, percentage: '%' },
        { amount : 82, percentage: '%' }
    ];

}
