export class Player {
    public Username: string;
    public Platform: string;
    public AccountID: string;
    public Avatar?: string;

    constructor(Username: string, Platform: string, AccountID: string, Avatar?: string) {
      this.Username = Username;
      this.Platform = Platform;
      this.AccountID = AccountID;
      this.Avatar = Avatar;
  }
}