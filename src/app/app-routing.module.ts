import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploaderComponent } from './shared/components/uploader/uploader.component';

const routes : Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'uploader', component: UploaderComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
