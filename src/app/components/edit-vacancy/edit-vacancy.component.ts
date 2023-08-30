import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Vacancy } from "../../models/vacancy.interface";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-vacancy',
  templateUrl: './edit-vacancy.component.html',
  styleUrls: ['./edit-vacancy.component.scss']
})
export class EditVacancyComponent implements OnInit {
  vacancyForm: FormGroup;
  vacancy?: Vacancy;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {
    this.vacancyForm = this.formBuilder.group({
      id: [''],
      title: [''],
      location: [''],
      type: [''],
      description: [''],
      salary: [''],
      isActive: [''],
      companyId: ['']
    });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.vacancy = this.dataService.getVacancyById(id);
    if (this.vacancy) {
      this.vacancyForm.patchValue(this.vacancy);
    }
  }

  updateVacancy(): void {
    if (this.vacancy) {
      const updatedVacancy = {
        ...this.vacancy,
        ...this.vacancyForm.value
      };
      this.dataService.updateVacancy(updatedVacancy);
      this.router.navigate(['/']);
    }
  }

  toggleVacancyStatus(): void {
    if (this.vacancy) {
      const newStatus = this.vacancy.isActive;
      this.dataService.updateVacancyStatus(this.vacancy.id, newStatus);
      this.vacancy.isActive = newStatus;
      console.log(this.vacancy.isActive);
    }
  }
  
}
