import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxComponent } from './box/box.component';
import { DemoSecComponent } from './demo-sec/demo-sec.component';
import { PagefoundComponent } from './pagefound/pagefound.component';
import { TextVdoComponent } from './text-vdo/text-vdo.component';

const routes: Routes = [
  {
    path:'company',component:TextVdoComponent
  },
  {
    path:'about',component:BoxComponent
  },
  {
    path:'signup',component:DemoSecComponent
  },
{
  path:'**',pathMatch:'full',component:PagefoundComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
