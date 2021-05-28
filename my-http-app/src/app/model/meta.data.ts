export class MetaData {
  public serviceName?: string;
  public portNumber?: number;
  public ipAddress?: string;

  constructor(serviceName: string, portNumber: number, ipAddress: string) {
    this.ipAddress =ipAddress;
    this.portNumber = portNumber;
    this.serviceName = serviceName;
  }
}
