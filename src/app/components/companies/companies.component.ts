import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { Company } from '../../models/company.interface';
import { Vacancy } from '../../models/vacancy.interface';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent {
  companies: any;
  selectedCompany: Company | null = null;


  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.companies = this.dataService.getCompanies();
  }

  deleteCompany(id: number): void {
    this.dataService.deleteCompany(id);
  }

  deleteVacancy(id: number): void {
    this.dataService.deleteVacancy(id);
  }

  getVacanciesCountForCompany(companyId: number): number {
    return this.dataService.getVacanciesCountForCompany(companyId); //I get the amount of vacancy available for that company and sum it up
  }

  selectCompany(company: Company) {
    this.selectedCompany = company;
  }

  getVacanciesForCompany(companyId: number): Vacancy[] {
    return this.dataService.getVacanciesForCompany(companyId);
  }
  
}
