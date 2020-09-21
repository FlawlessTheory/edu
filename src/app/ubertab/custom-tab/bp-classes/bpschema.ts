export class BPschema {
  state: string;
  ID: string;
  name: string;
  version: number;
  organization: string;

  constructor(state: string, ID: string, name: string, version: number, organization: string) {
    this.state = state;
    this.ID = ID;
    this.name = name;
    this.version = version;
    this.organization = organization;
  }
}
