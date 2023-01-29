import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBusinessDetail } from '../bussiness-detail';
import { BussinessDetailsComponent } from '../bussiness-details/bussiness-details.component';

@Component({
  selector: 'ak-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {

  /**It stores the data of form */
  public businessDetails: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<BussinessDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public businessDetail: IBusinessDetail,
    public formBuilder: FormBuilder
  ) {

    this.businessDetails = this.formBuilder.group({
      name: [businessDetail.name,[Validators.required]],
      domain: [businessDetail.domain,[Validators.required]],
      gender: [businessDetail.gender,[Validators.required]],
      dateOfBirth: [businessDetail.dateOfBirth,[Validators.required]],
      phone: [businessDetail.phone,[Validators.required]],
      location: [businessDetail.location,[Validators.required]]
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
