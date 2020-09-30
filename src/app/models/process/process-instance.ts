export class ProcessInstance {
  constructor(
    public readonly state: string,
    public readonly ID: string,
    public readonly startTS: Date,
    public readonly businessKey: string) { }
}
