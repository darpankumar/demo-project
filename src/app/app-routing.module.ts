import { ResponseComponent } from './response/response.component';
import { DetailFormComponent } from './detail-form/detail-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo : '/form', pathMatch: 'full' },
  { path: 'form', component: DetailFormComponent, pathMatch: 'full' },
  { path: 'response', component: ResponseComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
