export class ProcessInstance {
  state: string;
  ID: string;
  startTS: Date;
  businessKey: string;

  constructor(state: string, ID: string, startTS: Date, businessKey: string) {
      this.state = state;
      this.ID = ID;
      this.startTS = startTS;
      this.businessKey = businessKey;
    }
}
