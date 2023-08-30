import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Company } from '../../models/company.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent {
  companyForm!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) { }
  
  ngOnInit() {
    this.companyForm = this.formBuilder.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      zip: ['', Validators.required],
      //The required validators are to check if the form inputs are filled in, see the .html file
    });
  }

  successMessage: string | null = null;

  onSubmit() {
    if (this.companyForm.valid) {
      const newCompany: Company = this.companyForm.value;
      this.dataService.addCompany(newCompany);

      this.successMessage = 'Company successfully added!';
    }
  }
}
