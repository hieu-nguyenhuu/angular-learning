export class repos {
  id: string;
  name: string;
  html_url: string;
  description: string;
  /**
   *
   */
  constructor(id: string, name: string, url: string, description: string) {
    this.id = id;
    this.name = name;
    this.html_url = url;
    this.description = description;
  }
}
