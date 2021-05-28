export class ApiResponse {
  public data: Account[];
  public statusCode?: number;

  constructor(data: Account[], statusCode: number) {
    this.data = data;
    this.statusCode = statusCode;
  }

}
