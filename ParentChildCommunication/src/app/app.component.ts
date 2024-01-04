import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  
  title = 'ParentApp';

  @ViewChild(ChildComponent) childcomp;

  messageFromChild:string;

  messageToChild:string='Message from parent via Input decorator : Hey kiddo !';

  outputMessage:string;

  ngAfterViewInit(): void {
    this.messageFromChild = this.childcomp.messageToParent;
  }

  receiveMessage($event) {
    this.outputMessage = $event;
  }

}
