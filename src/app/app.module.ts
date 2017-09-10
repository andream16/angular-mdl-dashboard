import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/** App Routes **/
import { Routing } from './app.routes';

/** App Modules **/
import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    PagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
