import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { DetailCompanyComponent } from './components/detail-company/detail-company.component';
import { EditCompanyComponent } from './components/edit-company/edit-company.component';
import { CompaniesComponent } from "./components/companies/companies.component";
import { DetailVacancyComponent } from "./components/detail-vacancy/detail-vacancy.component";
import { EditVacancyComponent } from "./components/edit-vacancy/edit-vacancy.component";
import { CreateVacancyComponent } from "./components/create-vacancy/create-vacancy.component";


const routes: Routes = [
  { path: '', component: CompaniesComponent },
  { path: 'create-company', component: CreateCompanyComponent },
  { path: 'detail-company/:id/:slug', component: DetailCompanyComponent }, //I use the slugify here, the url looks better with when we also show the company name and not the id only
  { path: 'edit-company/:id', component: EditCompanyComponent },
  { path: 'detail-vacancy/:id', component: DetailVacancyComponent },
  { path: 'edit-vacancy/:id', component: EditVacancyComponent },
  { path: 'create-vacancy', component: CreateVacancyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
