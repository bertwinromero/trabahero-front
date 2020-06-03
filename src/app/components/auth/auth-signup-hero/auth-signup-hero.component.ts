import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

// NGRX
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../store/app.reducers';
import * as fromUsers from '../../../store/users';
// SERVICES
import { MockService } from './../../../services/mock/mock.service';

@Component({
  selector: 'app-auth-signup-hero',
  templateUrl: './auth-signup-hero.component.html',
  styleUrls: ['./auth-signup-hero.component.scss']
})
export class AuthSignupHeroComponent implements OnInit {
  userCreateForm: FormGroup;
  wasValidated: boolean;
  provinces: string[];
  cities: string[];

  photoUrl64: string;

  constructor(
    private readonly fb: FormBuilder,
    private mockService: MockService,
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.initProvinces();
    this.initCities();
  }

  private initForm(): void {
    this.userCreateForm = this.fb.group({
      firstName: this.fb.control('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40)
      ]),
      lastName: this.fb.control('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40)
      ]),
      middleName: this.fb.control('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40)
      ]),
      photoUrl: this.fb.control('', [
        Validators.required,
        Validators.maxLength(1024)
      ]),
      phoneNumber: this.fb.control('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(15)
      ]),
      gender: this.fb.control('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(6)
      ]),
      address: this.fb.control('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(255)
      ]),
      province: this.fb.control('MISAMIS ORIENTAL', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(255)
      ]),
      city: this.fb.control('CAGAYAN DE ORO CITY (Capital)', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(255)
      ]),
      email: this.fb.control('', [
        Validators.required,
        Validators.email,
        Validators.minLength(10),
        Validators.maxLength(50)
      ]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(1024)
      ])
    });
  }

  private initProvinces(): void {
    this.provinces = this.mockService.getProvinces();
  }

  private initCities(): void {
    this.cities = this.mockService.getCities();
  }

  onSubmit(): void {
    const user = {...this.userCreateForm.value, photoUrl: this.photoUrl64};
    this.store.dispatch(fromUsers.signupUser({user}));
  }

  isControlValid(control: AbstractControl): boolean {
    return control.invalid && !control.pristine;
  }

  onFileChanged(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
            this.photoUrl64 = e.target.result;
        };

        reader.readAsDataURL(fileInput.target.files[0]);
    }
}

}
