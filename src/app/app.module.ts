import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ClassStyleBindingComponent],
  bootstrap: [AppComponent, EventBindingComponent],
})
export class AppModule {}
