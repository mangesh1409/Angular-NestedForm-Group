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
      console.log(this.profileForm.value);
      this.data = this.profileForm.value;
  }
  updateProfile() {
    this.profileForm.patchValue({
      nfgname: 'Rohan',
      nfgemail: '234@gmail.com',
      nfgaddress: {
        street: '123 Drew Street',
        city: 'Mumbai',
        zip: 400094
      }
    });
  }
}
