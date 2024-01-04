import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { noSpace } from './validators/noSpace.validators'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomValidation';
form: any;
  constructor(fb: FormBuilder){
    this.form = fb.group({
      userName:['',[
        Validators.required,
        Validators.minLength(5),
        noSpace.noSpaceValidations
      ]],
      password:['', Validators.required]
    })
  }

  get fc(){
    return this.form.controls;
  }

  onSubmit(){

  }
}
