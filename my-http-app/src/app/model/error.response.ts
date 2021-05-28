export class ErrorResponse {
  public message?: string;
  public code?: number;
  public componentName?: string;

  constructor(message: string, code: number, componentName: string) {
    this.code = code;
    this.message = message;
    this.componentName = componentName;
  }
}
