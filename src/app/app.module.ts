import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TextVdoComponent } from './text-vdo/text-vdo.component';
import { BoxComponent } from './box/box.component';
import { DemoSecComponent } from './demo-sec/demo-sec.component';
import { FooterComponent } from './footer/footer.component';
import { PagefoundComponent } from './pagefound/pagefound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextVdoComponent,
    BoxComponent,
    DemoSecComponent,
    FooterComponent,
    PagefoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
