import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { runInThisContext } from 'vm';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { validate, format } from 'rut.js'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  landingForm: FormGroup; 
  rutOk: boolean = true;

 constructor(private userService:UserService, private router: Router, private fb: FormBuilder) {
  this.landingForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    rut: ['', Validators.required],
  })

  }
  ngOnInit(): void {
  }

  onRegister() {
    const form = this.landingForm.value;

    console.log ("Entire onregister", form)

    
    if (validate(form.rut)) {
      console.log("ES UN RUT VALIDO")
      this.userService.registerUser(form).then(document => {
        return this.router.navigate(['stream', document.id]);
      });
      
    } else {
      console.log("RUT INVALIDO")
      this.rutOk = false;
    }
  } 

}
