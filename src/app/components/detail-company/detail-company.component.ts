import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Vacancy } from '../../models/vacancy.interface';

@Component({
  selector: 'app-detail-company',
  templateUrl: './detail-company.component.html',
  styleUrls: ['./detail-company.component.scss']
})
export class DetailCompanyComponent {
  company: any;
  vacancies: Vacancy[] = [];

  constructor(private router: Router, private route: ActivatedRoute, public dataService: DataService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const slug = this.route.snapshot.paramMap.get('slug');
    this.company = this.dataService.getCompanyById(id);
    this.vacancies = this.dataService.getVacanciesForCompany(this.company.id);  
  }

  deleteCompany(id: number): void {
    this.dataService.deleteCompany(id);
    this.router.navigate(['/']);
  }
  
}
