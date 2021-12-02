import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildViewComponent } from './life-circle/child-view/child-view.component';
import { ParentViewComponent } from './life-circle/parent-view/parent-view.component';
import { ViewTestingComponent } from './view-testing/view-testing.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewTestingComponent,
    ChildViewComponent,
    ParentViewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
