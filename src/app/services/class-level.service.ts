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

import { ClassLevel } from '../models/class-level';

@Injectable()
export class ClassLevelService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
   ApiClassGetResponse(): Observable<HttpResponse<ClassLevel[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/class`,
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
        let _body: ClassLevel[] = null;
        _body = _resp.body as ClassLevel[]
        return _resp.clone({body: _body}) as HttpResponse<ClassLevel[]>;
      })
    );
  }

  /**
   * @return Success
   */
   ApiClassGet(): Observable<ClassLevel[]> {
    return this.ApiClassGetResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param ClassLevels undefined
   * @return Success
   */
   ApiClassPostResponse(ClassLevels?: ClassLevel): Observable<HttpResponse<ClassLevel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = ClassLevels;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/class`,
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
        let _body: ClassLevel = null;
        _body = _resp.body as ClassLevel
        return _resp.clone({body: _body}) as HttpResponse<ClassLevel>;
      })
    );
  }

  /**
   * @param ClassLevels undefined
   * @return Success
   */
   ApiClassPost(ClassLevels?: ClassLevel): Observable<ClassLevel> {
    return this.ApiClassPostResponse(ClassLevels).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
   ApiClassByIdGetResponse(id: number): Observable<HttpResponse<ClassLevel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/class/${id}`,
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
        let _body: ClassLevel = null;
        _body = _resp.body as ClassLevel
        return _resp.clone({body: _body}) as HttpResponse<ClassLevel>;
      })
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
   ApiClassByIdGet(id: number): Observable<ClassLevel> {
    return this.ApiClassByIdGetResponse(id).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `ClassLevelService.ApiClassByIdPutParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `ClassLevels`: 
   *
   * @return Success
   */
   ApiClassByIdPutResponse(params: ClassLevelService.ApiClassByIdPutParams): Observable<HttpResponse<ClassLevel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.ClassLevels;
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/class/${params.id}`,
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
        let _body: ClassLevel = null;
        _body = _resp.body as ClassLevel
        return _resp.clone({body: _body}) as HttpResponse<ClassLevel>;
      })
    );
  }

  /**
   * @param params The `ClassLevelService.ApiClassByIdPutParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `ClassLevels`: 
   *
   * @return Success
   */
   ApiClassByIdPut(params: ClassLevelService.ApiClassByIdPutParams): Observable<ClassLevel> {
    return this.ApiClassByIdPutResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   */
   ApiClassByIdDeleteResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/api/class/${id}`,
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
   ApiClassByIdDelete(id: number): Observable<void> {
    return this.ApiClassByIdDeleteResponse(id).pipe(
      map(_r => _r.body)
    );
  }
}

export module ClassLevelService {

  /**
   * Parameters for ApiClassByIdPut
   */
   export interface ApiClassByIdPutParams {

    id: number;

    ClassLevels?: ClassLevel;
  }
}
