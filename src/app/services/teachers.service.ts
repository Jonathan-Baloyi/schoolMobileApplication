/* tslint:disable */
import { Injectable } from '@angular/core';
import {
  HttpClient, HttpRequest, HttpResponse, 
  HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';

import { Teachers } from '../models/teachers';

@Injectable()
export class TeachersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
   ApiTeachersGetResponse(): Observable<HttpResponse<Teachers[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Teachers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Teachers[] = null;
        _body = _resp.body as Teachers[]
        return _resp.clone({body: _body}) as HttpResponse<Teachers[]>;
      })
    );
  }

  /**
   * @return Success
   */
   ApiTeachersGet(): Observable<Teachers[]> {
    return this.ApiTeachersGetResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param teachers undefined
   * @return Success
   */
   ApiTeachersPostResponse(teachers?: Teachers): Observable<HttpResponse<Teachers>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = teachers;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/Teachers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Teachers = null;
        _body = _resp.body as Teachers
        return _resp.clone({body: _body}) as HttpResponse<Teachers>;
      })
    );
  }

  /**
   * @param teachers undefined
   * @return Success
   */
   ApiTeachersPost(teachers?: Teachers): Observable<Teachers> {
    return this.ApiTeachersPostResponse(teachers).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
   ApiTeachersByIdGetResponse(id: number): Observable<HttpResponse<Teachers>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Teachers/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Teachers = null;
        _body = _resp.body as Teachers
        return _resp.clone({body: _body}) as HttpResponse<Teachers>;
      })
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
   ApiTeachersByIdGet(id: number): Observable<Teachers> {
    return this.ApiTeachersByIdGetResponse(id).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `TeachersService.ApiTeachersByIdPutParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `teachers`: 
   *
   * @return Success
   */
   ApiTeachersByIdPutResponse(params: TeachersService.ApiTeachersByIdPutParams): Observable<HttpResponse<Teachers>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.teachers;
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/Teachers/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Teachers = null;
        _body = _resp.body as Teachers
        return _resp.clone({body: _body}) as HttpResponse<Teachers>;
      })
    );
  }

  /**
   * @param params The `TeachersService.ApiTeachersByIdPutParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `teachers`: 
   *
   * @return Success
   */
   ApiTeachersByIdPut(params: TeachersService.ApiTeachersByIdPutParams): Observable<Teachers> {
    return this.ApiTeachersByIdPutResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   */
   ApiTeachersByIdDeleteResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/api/Teachers/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param id undefined
   */
   ApiTeachersByIdDelete(id: number): Observable<void> {
    return this.ApiTeachersByIdDeleteResponse(id).pipe(
      map(_r => _r.body)
    );
  }
}

export module TeachersService {

  /**
   * Parameters for ApiTeachersByIdPut
   */
   export interface ApiTeachersByIdPutParams {

    id: number;

    teachers?: Teachers;
  }
}
