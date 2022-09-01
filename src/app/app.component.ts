import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
  {type: 'server', name: 'Test server', content: 'Just a test'}, 
  {type: 'server', name: 'Test server2', content: 'Just a test2'},
  {type: 'server', name: 'Test server3', content: 'Just a test3'}
];


}
