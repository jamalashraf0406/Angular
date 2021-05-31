export class TopicMetaData {
  public id?: string;
  public path?: string;
  public displayName?: string;
  public topic?: string;

  constructor(id: string, path: string, displayName: string, topic: string) {
    this.id = id;
    this.path = path;
    this.displayName = displayName;
    this.topic = topic;
  }
}
