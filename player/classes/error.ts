export class Error {
  Status: number;
  Message: string;

  constructor(Status: number, Message: string) {
    this.Status = Status;
    this.Message = Message;
  }
}