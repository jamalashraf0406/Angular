import {NgModule} from "@angular/core";
import {LoggingService} from "./common/logging.service";

@NgModule({
  providers: [
    LoggingService
  ]
})
export class CoreModule {}
