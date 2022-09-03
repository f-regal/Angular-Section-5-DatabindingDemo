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


onServerAdded(serverData: {serverName: string, serverContent: string}) {
  this.serverElements.push({
    type: 'server',
    name: serverData.serverName,
    content: serverData.serverContent
  });
}

onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
  this.serverElements.push({
    type: 'blueprint',
    name: blueprintData.serverName,
    content: blueprintData.serverContent
  });
}


}
