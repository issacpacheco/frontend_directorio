import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contacto-form',
  templateUrl: './contacto-form.component.html',
  styleUrls: ['./contacto-form.component.css']
})
export class ContactoFormComponent implements OnInit {
  contactForm: FormGroup;
  productoId: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      imagen: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.productoId = this.route.snapshot.params['id'];
    this.apiService.getProducto(this.productoId).subscribe((data) => {
      this.contactForm.patchValue(data);
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.apiService.updateProducto(this.productoId, this.contactForm.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
