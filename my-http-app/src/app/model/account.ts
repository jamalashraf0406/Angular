import {MetaData} from "./meta.data";

export class Account {
  public metaData: MetaData;
  public accountNumber: number;
  public accountHolderName: string;
  public branchName: string;
  public outstanding: number;

  constructor(metaData: MetaData, accountNumber: number,
              accountHolderName: string, branchName: string,
              outstanding: number) {
    this.outstanding = outstanding;
    this.accountNumber = accountNumber;
    this.metaData = metaData;
    this.accountHolderName = accountHolderName;
    this.branchName = branchName;

  }

}
