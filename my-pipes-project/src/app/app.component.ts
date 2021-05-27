import { Component } from '@angular/core';

class Server {
  public instanceType: string;
  public name: string;
  public status: string;
  public started: Date;

  constructor(instanceType: string, name: string, status: string, started: Date) {
    this.instanceType = instanceType;
    this.name = name;
    this.status = status;
    this.started = started;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000)
  });

  servers: Server[] = [
    new Server("medium",'Production Server',
      'stable',new Date(2017,1,15)),

    new Server("large",'User Database',
      'offline',new Date(2017,1,15)),

    new Server("small",'Development Server',
      'stable',new Date(2017,1,15)),

    new Server("small",'Testing Environment Server',
      'critical',new Date(2017,1,15)),

  ];

  filterStatus: string = ''

  getStatusClasses(server: Server) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  onAddServer() {
    const server = new Server('small','Uat Server',
      'critical', new Date(2017,1,15));
    this.servers.push(server);
  }
}
