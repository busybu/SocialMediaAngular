import { Component } from '@angular/core';
import { FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule, } from '@angular/forms';
  import {ErrorStateMatcher} from '@angular/material/core';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  email = new FormControl('', [
  ]);
  link = ""
  password = ""
  constructor(private router: Router) { }

  passwordChanged(event: any) {

    this.password = event
    
  }
  login() {
    // Aqui precisariamos fazer essa verificação no banco de dados
    if (this.password == "123") {
      // Isso evidentemente não é seguro, mas a ideia é bom e será melhorada no futuro
      sessionStorage.setItem('user', 'donplatinado');
      this.router.navigate(["/feed"])
    }
  }
}