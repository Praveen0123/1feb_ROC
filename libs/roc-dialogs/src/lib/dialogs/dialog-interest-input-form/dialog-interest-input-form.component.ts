import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'roc-lib-dialog-interest-input-form',
  templateUrl: './dialog-interest-input-form.component.html',
  styleUrls: ['./dialog-interest-input-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogInterestInputFormComponent implements OnInit
{


  interestInputForm: FormGroup;
  products = [
    'ROC for high schools',
    'ROC for colleges',
    ' ROC for job centers',

  ];

  productSelectedValue: MatSelectChange;

  constructor(public dialogRef: MatDialogRef<DialogInterestInputFormComponent>, private fb: FormBuilder,
  )
  {
    this.createsFeedbackForm();
  }


  createsFeedbackForm()
  {
    this.interestInputForm = this.fb.group({

      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      phone: new FormControl(''),
      organization: new FormControl('', [Validators.required]),
      job_title: new FormControl('', [Validators.required]),
      products: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),


    });
  }


  ngOnInit(): void
  {


  }


  // SELECTED VALUE OF DROPDOWN
  productSelected(selectedValue: MatSelectChange): void
  {
    console.log(selectedValue, "selected");
    this.productSelectedValue = selectedValue;
  }


  // form submit
  interestInputFormSubmit()
  {
    const submitFormData = {
      first_name: this.interestInputForm.controls.first_name.value,
      last_name: this.interestInputForm.controls.last_name.value,
      email: this.interestInputForm.controls.email.value,
      phone: this.interestInputForm.controls.phone.value,
      organization: this.interestInputForm.controls.organization.value,
      job_title: this.interestInputForm.controls.job_title.value,
      product: this.interestInputForm.controls.products.value,
      description: this.interestInputForm.controls.description.value,

    };
    this.dialogRef.close(submitFormData);
  }


}
