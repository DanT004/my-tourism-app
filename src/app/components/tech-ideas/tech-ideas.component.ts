import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GetCityNamesService } from 'src/app/services/get-city-names.service';
import { invalidWord } from './customValidation';

@Component({
  selector: 'app-tech-ideas',
  templateUrl: './tech-ideas.component.html',
  styleUrls: ['./tech-ideas.component.css']
})
export class TechIdeasComponent implements OnInit {

  img1 = "https://2.bp.blogspot.com/-NsKt6WzZ9x8/WHkK3H6dQaI/AAAAAAAADL4/j4kPz9mYp3My_z9epvJw6HeQy8u_KGNXgCLcB/w1200-h630-p-k-no-nu/foolsjaps.jpg"
  userForm;
  cities;

  constructor(private _cityNames:GetCityNamesService, private formBuilder:FormBuilder) { 
    this.cities = this._cityNames.getNames();
    this.userForm = formBuilder.group({
      name:['', [Validators.required, Validators.minLength(3), invalidWord(/tourist/)]],
      age:[''],
      email:['', [Validators.required]],
      city:['', [Validators.required]],
      brief:['', [Validators.required, Validators.minLength(15), invalidWord(/nothing/)]],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.userForm.value);
    this.userForm.reset();
  }

  get nameFormControl(){
    return this.userForm.get('name')!;
  }

  get ageFormControl(){
    return this.userForm.get('age')!;
  }

  get emailFormControl(){
    return this.userForm.get('email')!;
  }

  get cityFormControl(){
    return this.userForm.get('city')!;
  }

  get briefFormControl(){
    return this.userForm.get('brief')!;
  }

}
