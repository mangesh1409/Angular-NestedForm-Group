import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NestedFromGroup'
  data;

  profileForm = new FormGroup({
    nfgname: new FormControl(''),
    nfgemail: new FormControl(''),
    nfgaddress: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
    })
  });
 Submitdata(){
      // console.log(this.profileForm);
      // console.log(this.profileForm.value);
      this.data = this.profileForm.value;
      console.log(this.profileForm.get('nfgname').value);
      console.log(this.profileForm.controls.nfgemail.value);
      console.log(this.profileForm.get('nfgaddress.street').value);
      console.log(this.profileForm.get('nfgaddress.city').value);
      console.log(this.profileForm.get('nfgaddress.state').value);
  }
  updateProfile() {
    this.profileForm.patchValue({
      nfgname: 'Rohan',
      nfgemail: '234@gmail.com',
      nfgaddress: {
        street: 'Joshi Road',
        city: 'Mumbai',
        state: 'Maharashtra'
      }
    });
  }
}
