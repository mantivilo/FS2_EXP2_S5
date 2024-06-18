import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule]
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      nombreCompleto: ['', [Validators.required]],
      nombreUsuario: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      clave: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(18),
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/)
      ]],
      repetirClave: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
      direccionDespacho: ['']
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('clave')!.value === form.get('repetirClave')!.value ? null : { mismatch: true };
  }

  onSubmit() {
    const today = new Date();
    const birthDate = new Date(this.registrationForm.get('fechaNacimiento')?.value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (this.registrationForm.valid && age >= 13) {
      alert('Formulario enviado con éxito.');
    } else {
      if (age < 13) {
        alert('Debe tener al menos 13 años para registrarse.');
      } else {
        alert('El formulario tiene errores. Por favor, corríjalos y vuelva a intentarlo.');
      }
    }
  }

  limpiarFormulario() {
    this.registrationForm.reset();
  }
}
