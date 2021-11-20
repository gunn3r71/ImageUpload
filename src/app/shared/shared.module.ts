import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploaderComponent } from './components/uploader/uploader.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UploaderComponent
  ],
  exports: [UploaderComponent]
})
export class SharedModule { }
