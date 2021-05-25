import {Injectable} from "@angular/core";
import {CounterService} from "./counter.service";

@Injectable()
export class UsersService {

  activeUsers = ["Jamal","Ashraf"];
  inactiveUsers = ["Hamza", "Taj"];

  constructor(private counterService: CounterService) {
  }

  onSetToInactive(id:number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementInactiveToActive();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive()
  }
}
