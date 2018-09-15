import { Url, QueryParam } from "./url";

export class UrlBuilder {
  private static _builder: UrlBuilder;
  private url: Url;

  private constructor() {
    this.url = new Url();
    this.url.queryParams = [];
  }

  public static builder(): UrlBuilder {
    this._builder = new UrlBuilder();
    return this._builder;
  }

  public base(base: string): UrlBuilder {
    this.url.base = base;
    return UrlBuilder._builder;
  }

  public queryParam(queryParam: QueryParam): UrlBuilder {
    if (queryParam.value) {
      this.url.queryParams.push(queryParam);
    }

    return UrlBuilder._builder;
  }

  public build(): Url {
    return this.url;
  }

}