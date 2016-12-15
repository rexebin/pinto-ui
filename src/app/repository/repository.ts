import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IEntity} from './entity.interface';
import {ListParamInterface} from '../master-detail/data-table/list.service.interface.ts';
import {Injectable} from '@angular/core';
import {LoggerService} from '../common/logger/logger.service';
import {ISearchResult} from './search-result.interface';
@Injectable()
export class Repository {
  baseUrl: string = 'http://localhost:5000/api/';

  constructor(private _http: Http, private _logger: LoggerService) {

  }

  add(entityName: string, entity: any) {
    let json = JSON.stringify(entity);
    let url = this.getApiUrl(entityName);
    url = url + '/Create';
    this._http.post(url, json);
  };

  getById(entityName: string, id: number): Observable<any> {
    let url = this.getApiUrl(entityName);
    url = url + '/' + id;
    return this._http.get(url)
      .map(res => res.json())
      .map((entity: any) => {
        return entity;
      });
  };

  delete = (entityName: string) => {

    return undefined;
  };

  getAll(entityName: string, listParam: ListParamInterface): Observable<ISearchResult> {
    let url = this.getApiUrl(entityName);
    url =
      `${url}?q=${listParam.search}&_sort=${listParam.orderBy}&_order=${listParam.reverse ? 'DESC' :
        'ASC'}&_start=${(listParam.page - 1) * listParam.itemsPerPage}&_limit=${listParam.itemsPerPage}`;
    return this._http.get(url).map(this.extractData)
      .catch(this.handleError);
  };

  getDisplayName(entityName: string) {
    let url = this.getApiUrl(entityName);
    url = `${url}/prime`;
    return this._http.get(url).map(res => res.json());
  }

  save(entityName: string, item: any): Observable<IEntity> {
    let body = JSON.stringify(item);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let url = this.getApiUrl(entityName);
    return this._http.put(url, body, options)
      .map(this.mapData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    let totalCount = res.headers.get('X-Total-Count');
    return {items: body || {}, totalCount: parseInt(totalCount, 10)};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  private mapData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private getApiUrl(entityName: string): string {
    if (!entityName) {
      this._logger.error('Entity name is missing');
      throw 'Entity name is missing';
    }
    return (this.baseUrl + entityName).toLowerCase();
  }
}
