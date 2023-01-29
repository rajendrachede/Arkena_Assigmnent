import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IBusinessDetail } from '../bussiness-detail';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'ak-bussiness-details',
  templateUrl: './bussiness-details.component.html',
  styleUrls: ['./bussiness-details.component.scss']
})
export class BussinessDetailsComponent {

public profile : IBusinessDetail = {
  name: "Mary Jonson & Hodge Attorny",
  domain: "www.mjhattorny.com",
  gender: "male",
  dateOfBirth: "18 jan 1967",
  phone:99897687,
  location:"12 street silicon valley"
}

constructor(public dialog: MatDialog){}

  public editProfile(){
    const dialogRef = this.dialog.open(EditProfileComponent, {
      data: this.profile,
      height: '600px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
