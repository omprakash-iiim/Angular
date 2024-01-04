import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Binding';

  userName:string;

  interpolationEg : string = "This is an example of string interpolation";

  imgUrl : string = "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg";

  bool:boolean = false;

  buttonClicked(){
    console.log("Button clicked");
    
  }

  onKeyUp($event){
    if($event.keyCode == 13){
      console.log("Enter pressed");
    }
  }

  onKeyUpWithFilter(){
    console.log("Enter pressed again");
  }

  getValue($event){
    console.log($event.target.value);
  }
  
  getTempalteVarValue(username){
    console.log(username);
  }
}

