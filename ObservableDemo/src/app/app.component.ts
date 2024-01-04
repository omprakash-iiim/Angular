import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ObservableDemo';

  ngOnInit(){
    const obsTest = new Observable(observer => {
      console.log("log from observable");
      //to return something from observable, we can use the next function
      observer.next("Value returned from observer");
      //below is the asycn implementation, so now subscribe will 
      //continously wathich this observable and after 2 seconds below data will get returned and 
      //subscribe will check this and fetch teh returned data.
      setTimeout(() => {
        observer.next("Execute this after given seconds");
      }, 2000)
      //we can return multiple data also from observable but in traditional JS function, its not possible.
      observer.next("Returned another variable");
      //to fetch all the returned value from this observable, 
      //we can use the parameter in subscribe function
    }).subscribe(value => {
      //this value parameter will contain all the returned objects from observable
      console.log(value);
    });
  
    //to keep this subscribe open everytime is not a good idea. so we need to unsubscribe observable.
    setTimeout(()=> {
      console.log("Unsubscribed");
      obsTest.unsubscribe();
    }, 5000);
    

    const obsTest2 = function (){
      //with traditional JS function we cannot return multiple data.
      return "log from function";
      
    }

    const returnData = obsTest2();
    console.log(returnData);
    

  }
  
}
