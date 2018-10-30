import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailFormComponent } from './detail-form/detail-form.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material/angular-material.module';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { DialogueBoxComponent } from './dialogue-box/dialogue-box.component';
import { ResponseComponent } from './response/response.component';
@NgModule({
  declarations: [
    AppComponent,
    DetailFormComponent,
    CardComponent,
    DialogueBoxComponent,
    ResponseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  entryComponents : [DialogueBoxComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
