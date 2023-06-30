import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchsCreateComponent } from './branchs/branchs-create/branchs-create.component';
import {  BranchsListComponent} from './branchs/branchs-list/branchs-list.component';
import {  CoinsCreateComponent} from './coins/coins-create/coins-create.component';
import {  CoinsListComponent} from './coins/coins-list/coins-list.component';

const routes: Routes = [
  { path: 'branchs/create', component: BranchsCreateComponent },
  { path: 'branchs', component: BranchsListComponent },
  { path: 'coins/create', component: CoinsCreateComponent },
  { path: 'coins', component: CoinsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
