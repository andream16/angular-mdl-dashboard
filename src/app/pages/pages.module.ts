import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdlModule } from '@angular-mdl/core';

/** App Pages **/
import { PagesComponent } from './pages.component';
import { HomePageComponent } from './home/homepage.component';

/** App Components **/
import { NavBarComponent } from '../shared/components/navbar/nav-bar.component';
import { SideBarComponent } from '../shared/components/sidebar/side-bar.component';
import { PurpleCardComponent } from '../shared/components/main/purple-card/purple-card.component';
import { GreenCardComponent } from '../shared/components/main/green-card/green-card.component';
import { GraphComponent } from '../shared/components/main/graph/graph.component';
import { ChartComponent } from '../shared/components/main/chart/chart.component';

@NgModule({
    declarations: [
        NavBarComponent,
        SideBarComponent,
        HomePageComponent,
        PurpleCardComponent,
        GreenCardComponent,
        GraphComponent,
        ChartComponent,
        PagesComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MdlModule
    ],
    exports: [
        NavBarComponent,
        SideBarComponent,
        HomePageComponent,
        PurpleCardComponent,
        GraphComponent,
        ChartComponent,
        GreenCardComponent
    ]
})
export class PagesModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: PagesModule
        };
    }
}
