import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Vacancy } from '../../models/vacancy.interface'; 
import { Company } from '../../models/company.interface'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-vacancy',
  templateUrl: './detail-vacancy.component.html',
  styleUrls: ['./detail-vacancy.component.scss']
})
export class DetailVacancyComponent implements OnInit {
  vacancy!: Vacancy;
  companyId!: number;
  selectedCompany!: Company;

  constructor(private router: Router, private route: ActivatedRoute, public dataService: DataService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.vacancy = this.dataService.getVacancyById(id);
    this.companyId = this.vacancy.companyId;
    this.selectedCompany = this.dataService.getCompanyById(this.companyId)!;
  }

  deleteVacancy(id: number): void {
    this.dataService.deleteVacancy(id);
    this.router.navigate(['/']);
  }
}
