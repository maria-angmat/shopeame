import { WelcomeComponent } from './homepage/welcome/welcome.component';
import { FormComponent } from './management/form/form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'management', loadChildren: () =>
    import('./management/management.module').then(m => m.ManagementModule)
  },
  {
    path: 'homepage', component: WelcomeComponent
  },
  // {path: '', redirectTo: 'homepage', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}