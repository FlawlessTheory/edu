export class ProcessDefinition {
  constructor(
    public readonly state: string,
    public readonly ID: string,
    public readonly name: string,
    public readonly version: number,
    public readonly organization: string) { }
}
