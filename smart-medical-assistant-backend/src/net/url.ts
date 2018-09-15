export interface QueryParam {
  name: string;
  value: string;
}

export class Url {
  private _base: string;
  private _queryParams: QueryParam[];

  get base(): string {
    return this._base;
  }

  set base(base: string) {
      this._base = base;
  }

  get queryParams(): QueryParam[] {
    return this._queryParams;
  }

  set queryParams(queryParams: QueryParam[]) {
    this._queryParams = queryParams;
  }

  public toString(): string {
    let urlString: string = this.base;

    if (this._queryParams.length > 0) {
      urlString += "?";
      this.queryParams.forEach((param, index, array) => {
        urlString += param.name + "=" + param.value;
        if (index !== array.length - 1) {
          urlString += "&";
        }
      });
    }

    return urlString;
  }
}