import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // Deine Komponenten
  ],
  imports: [
    HttpClientModule,
    // Weitere Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
