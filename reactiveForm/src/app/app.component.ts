import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveForm';

  emailRegex:string="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$";
  form:any;
  constructor(){
    this.form = new FormGroup({
      firstName: new FormControl('',
      [Validators.required,
      Validators.minLength(5)]
      ),
      email:new FormControl('', [Validators.required,
      Validators.pattern(this.emailRegex)]),
      address:new FormControl(),
      skills: new FormArray([])
    })
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get email() {
    return this.form.get('email');
  }

  get address() {
    return this.form.get('address');
  }

  onSubmit() {
    console.log(this.form.value);
  }

  addSkills(skill: HTMLInputElement){
      (this.Skills).push(
        new FormControl(skill.value)
      );
      console.log(this.form.value);
      skill.value='';
      
  }

  get Skills(){
    return this.form.get('skills') as FormArray;
  }

  removeSkill(index) {
    this.Skills.removeAt(index);
  }

}
