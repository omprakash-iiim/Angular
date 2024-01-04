import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() fromParent:string;

  messageToParent :string='Message from Child via ViewChildDcorator : I am good, Thanks';

  outputChildMessage:string = "Message from Child Via Output : I hope you are also doing well."

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.fromParent);
  }

  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage);
  }

}
