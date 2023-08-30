import { Injectable } from '@angular/core';
import { Company } from '../models/company.interface';
import { Vacancy } from '../models/vacancy.interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  isLoggedIn = false; //Create the simplified version of login, we set it to a default false.

  //I create dummy companies
  companies = [
    { 
      id: 1, 
      name: 'JEX', 
      country: 'The Netherlands', 
      city: 'Rotterdam',
      address: 'Nassaukade 5',
      zip: '3071JL',
    },
    { 
      id: 2, 
      name: 'Samsko.co', 
      country: 'The Netherlands',
      city: 'The Hague',
      address: 'Uitgeeststraat 37', 
      zip: '2547VB',
    },
  ]

  getCompanies() {
    return this.companies;
  }

  addCompany(company: Company): void{
    const { id, ...rest } = company; //I seperate the id with the rest of the properties
    const newId = this.companies.length + 1; // I increment the ID with one everytime a new company is added
    this.companies.push({ id: newId, ...rest }); //I push the new company to the companies array of objects
  }

  getCompanyById(id: number) {
    return this.companies.find(company => company.id === id);
  }

  deleteCompany(id: number): void {
    const index = this.companies.findIndex(company => company.id === id); //I search for the index of the company we want to remove (based on the ID of course)
    if (index !== -1) { //I check if we found the ID, it returns -1 if that's not the case
      this.companies.splice(index, 1); //I use the splice method to remove the element found within the array 
    }
  }

  updateCompany(updatedCompany: Company): void {
    const index = this.companies.findIndex(company => company.id === updatedCompany.id);
    if (index !== -1) {
      this.companies[index] = updatedCompany;
    }
  }

  //Create dummy vacancies
  vacancies: Vacancy[] = [
    { 
      id: 1, 
      title: 'Fullstack Developer', 
      location: 'Remote',
      type: 'Fulltime',
      description: 'We are seeking a highly skilled fullstack developer to join our team. Your role will include creating and implementing user interfaces for our web applications.', 
      salary: '$3600+',
      isActive: true, 
      companyId: 1
    },
    { 
      id: 2, 
      title: 'Frontend Developer', 
      location: 'Remote',
      type: 'Fulltime',
      description: 'We are seeking a highly skilled fullstack developer to join our team. Your role will include creating and implementing user interfaces for our web applications.', 
      salary: '$3600+',
      isActive: true, 
      companyId: 1 
    },
    { 
      id: 3, 
      title: 'Backend Developer', 
      location: 'Remote',
      type: 'Parttime',
      description: 'We are seeking a highly skilled fullstack developer to join our team. Your role will include creating and implementing user interfaces for our web applications.', 
      salary: '$3600+',
      isActive: true, 
      companyId: 2
    },
  ];
  
  getVacancies(): Vacancy[] {
    return this.vacancies;
  }


  getVacancyById(id: number): Vacancy {
    return this.vacancies.find(vacancy => vacancy.id === id)!;
  }
  
  addVacancy(vacancy: Vacancy): void {
    const newId = this.vacancies.length + 1; //Once again I increment the existing ID with one, but this time for the vacancies
    const newVacancy = { ...vacancy, id: newId }; //I create a new vacancy object by combining the passed vacancy data with the new id.
    this.vacancies.push(newVacancy); // I add the new vacancy object to the vacancies array.
  }
  
  
  deleteVacancy(id: number): void {
    const index = this.vacancies.findIndex(vacancy => vacancy.id === id);
    if (index !== -1) {
      this.vacancies.splice(index, 1);
    }
  }
  
  updateVacancy(updatedVacancy: Vacancy): void {
    // I search and find the index of the existing vacancy that matches the id of the updatedVacancy.
    const index = this.vacancies.findIndex(vacancy => vacancy.id === updatedVacancy.id);
    if (index !== -1) {  // Check if a matching vacancy is found (index !== -1).
      this.vacancies[index] = updatedVacancy; // If its true, I update the existing vacancy with the updatedVacancy object.
    }
  }

  getVacanciesCountForCompany(companyId: number): number {
    return this.vacancies.filter(vacancy => vacancy.companyId === companyId).length;
  }
  
  getVacanciesForCompany(companyId: number): Vacancy[] {
    return this.vacancies.filter(v => v.companyId === companyId);
  }

  updateVacancyStatus(id: number, isActive: boolean): void {
    const vacancy = this.vacancies.find(v => v.id === id);
    if (vacancy) {
      vacancy.isActive = isActive;
    }
  }
  
}