import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Company } from '../../models/company.interface';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent {

  companyForm: FormGroup;
  company?: Company; //We let Typescript know that the value is allowed to be undefined 

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {
    this.companyForm = this.formBuilder.group({
      id: [''],
      name: [''],
      country: [''],
      city: [''],
      address: [''],
      zip: ['']
    });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; //We know for sure that the ID will NEVER be 0, so we let Typescript know this by adding !
    this.company = this.dataService.getCompanyById(id);
    if (this.company) {
      this.companyForm.patchValue(this.company);
    }
  }

  updateCompany(): void {
    const updatedCompany = this.companyForm.value;
    this.dataService.updateCompany(updatedCompany);
    this.router.navigate(['/']);
  }
}
