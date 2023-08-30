import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Vacancy } from '../../models/vacancy.interface';
import { Company } from '../../models/company.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-vacancy',
  templateUrl: './create-vacancy.component.html',
  styleUrls: ['./create-vacancy.component.scss']
})
export class CreateVacancyComponent {
  vacancyForm!: FormGroup;
  companies: Company[] = [];
  
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) { }
  
  ngOnInit() {
    this.companies = this.dataService.getCompanies();

    this.vacancyForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      location: ['', Validators.required],
      salary: ['', Validators.required],
      isActive: ['', Validators.required],
      companyId: ['', Validators.required],
      //The same required validators as all other create components. the inputs cant be empty.
    });
  }

  successMessage: string | null = null;

  onSubmit() {
    if (this.vacancyForm.valid) {
      const newVacancy: Vacancy = this.vacancyForm.value;
      this.dataService.addVacancy(newVacancy);

      this.successMessage = 'Company successfully added!';
    }
  }
}
