import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto-form',
  standalone: true,
  imports: [],
  templateUrl: './contacto-form.component.html',
  styleUrls: ['./contacto-form.component.css'],
})
export class ContactoFormComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phones: this.fb.array([this.createPhone()]),
      emails: this.fb.array([this.createEmail()]),
      addresses: this.fb.array([this.createAddress()]),
    });
  }

  createPhone(): FormGroup {
    return this.fb.group({
      phone_number: ['', Validators.required],
    });
  }

  createEmail(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  createAddress(): FormGroup {
    return this.fb.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip_code: ['', Validators.required],
    });
  }

  get phones(): FormArray {
    return this.contactForm.get('phones') as FormArray;
  }

  addPhone(): void {
    this.phones.push(this.createPhone());
  }

  removePhone(index: number): void {
    this.phones.removeAt(index);
  }

  // Similarly for emails and addresses
  get emails(): FormArray {
    return this.contactForm.get('emails') as FormArray;
  }

  addEmail(): void {
    this.emails.push(this.createEmail());
  }

  removeEmail(index: number): void {
    this.emails.removeAt(index);
  }

  get addresses(): FormArray {
    return this.contactForm.get('addresses') as FormArray;
  }

  addAddress(): void {
    this.addresses.push(this.createAddress());
  }

  removeAddress(index: number): void {
    this.addresses.removeAt(index);
  }
}
