import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomPipe';

  userDetails = {
    name:"Name",
    city:"Calgary",
    province:"Alberta"
  }

  demoText="I would highly recommend Text-Em-All if you work in a business that requires strong communication with a large amount of people outside of the physical workplace";
}
