import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchsCreateComponent } from './branchs/branchs-create/branchs-create.component';
import {  BranchsListComponent} from './branchs/branchs-list/branchs-list.component';

const routes: Routes = [
  { path: 'branchs/create', component: BranchsCreateComponent },
  { path: 'branchs', component: BranchsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
