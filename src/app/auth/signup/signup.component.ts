import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  password :boolean =true; 
  hide() {
     this.password=!this.password;
    return !this.password;
  }

clickEvent($event: MouseEvent) {
throw new Error('Method not implemented.');
}
emailFormControl: any;
}
