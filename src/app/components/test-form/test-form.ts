import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './test-form.html',
  styleUrl: './test-form.scss'
})
export class TestForm {

  ageValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const isValidAge = value >= 18 && value <= 90;
    return isValidAge ? null : { ageInvalid: 'age must be between 18 and 90' };
  };

  complexForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl(null, [Validators.required, this.ageValidator]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    consent: new FormControl(false, Validators.requiredTrue), //boolean type of agree

  });

  onSubmit() {
    console.log('form value', this.complexForm.value);
    console.log('Form status - is valid?', this.complexForm.valid);
    console.log('Form controls:', this.complexForm.controls);

  };

// гетери для доступу до полів форми
  get name() {
    return this.complexForm.get('name');
  }

  get email() {
    return this.complexForm.get('email');
  }

  get age() {
    return this.complexForm.get('age');
  }

  get password() {
    return this.complexForm.get('password');
  }

  get consent() {
    return this.complexForm.get('consent');
  }

}
