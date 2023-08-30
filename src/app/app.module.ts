//Nothing too fancy about this code :)

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { DataService } from './services/data.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DetailCompanyComponent } from './components/detail-company/detail-company.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SlugifyPipe } from "./features/slugify.pipe";
import { EditCompanyComponent } from './components/edit-company/edit-company.component';
import { DetailVacancyComponent } from './components/detail-vacancy/detail-vacancy.component';
import { CreateVacancyComponent } from './components/create-vacancy/create-vacancy.component';
import { EditVacancyComponent } from './components/edit-vacancy/edit-vacancy.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CreateCompanyComponent,
    NavigationComponent,
    DetailCompanyComponent,
    SlugifyPipe,
    EditCompanyComponent,
    DetailVacancyComponent,
    CreateVacancyComponent,
    EditVacancyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
