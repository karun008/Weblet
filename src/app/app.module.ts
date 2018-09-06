import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WlMaterialModule } from './wl-material/wl-material.module';
import { RouterModule, Routes } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { SignupComponent } from './signup/signup.component';
import {FlexLayoutModule} from '@angular/flex-layout'
import {FormsModule} from '@angular/forms'
const appRoutes: Routes = [
  { path: '', component: MyComponentComponent },
  { path: 'home/:id',component: MyComponentComponent },
  { path: 'signin',component: SignupComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    WlMaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
