import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RoutingDemo';

constructor(private router: Router){}

  ngOnInit(){
  }

  onSubmit() {
    //navigate without parameter
    //this.router.navigate(['/employees']);
    //to pass the parameters
    //this.router.navigate(['/employee', 1, 'asdasd']);
    //query param
    this.router.navigate(['/employees'], {queryParams: {page:1, sortBy:'newest'}});
  }
  
}
