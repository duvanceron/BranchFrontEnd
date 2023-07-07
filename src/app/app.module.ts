import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { BranchsCreateComponent } from './branchs/branchs-create/branchs-create.component';
import { BranchsFormComponent } from './branchs/branchs-form/branchs-form.component';
import { BranchsListComponent } from './branchs/branchs-list/branchs-list.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { MatTableModule } from '@angular/material/table';
import { CoinsFormComponent } from './coins/coins-form/coins-form.component';
import { CoinsCreateComponent } from './coins/coins-create/coins-create.component';
import { CoinsListComponent } from './coins/coins-list/coins-list.component';
import { CoinsEditComponent } from './coins/coins-edit/coins-edit.component';
import { BranchsEditComponent } from './branchs/branchs-edit/branchs-edit.component';
import { ErrorShowComponent } from './utilities/error-show/error-show.component';


@NgModule({
  declarations: [
    AppComponent,
    BranchsCreateComponent,
    BranchsFormComponent,
    BranchsListComponent,
    MenuComponent,
    GenericListComponent,
    CoinsFormComponent,
    CoinsCreateComponent,
    CoinsListComponent,
    CoinsEditComponent,
    BranchsEditComponent,
    ErrorShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
