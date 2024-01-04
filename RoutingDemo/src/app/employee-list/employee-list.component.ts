import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees = [{
    id:1,
    name:"sdasda",
    designation:"sdasd"
  },
  {
    id:2,
    name:"sda2sda",
    designation:"sd2asd"
  }]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParamMap.subscribe(value => {
      console.log(value);
      console.log(value.get('page'));
      console.log(value.get('sortBy'));
      
      
    })

  }
}
