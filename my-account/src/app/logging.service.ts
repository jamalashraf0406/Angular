/**
 * Here we didn't use @Injectable() decorator because
 * we are not going to inject any service into this service.
 *
 * */
export class LoggingService {

  logStatusChanged(status: string) {
    console.log("A server status changed, new status: "+ status);
  }
}
