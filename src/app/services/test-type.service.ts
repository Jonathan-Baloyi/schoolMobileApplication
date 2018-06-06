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

import { TestType } from '../models/test-type';

@Injectable()
export class TestTypeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
   ApiTestTypeGetResponse(): Observable<HttpResponse<TestType[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/TestType`,
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
        let _body: TestType[] = null;
        _body = _resp.body as TestType[]
        return _resp.clone({body: _body}) as HttpResponse<TestType[]>;
      })
    );
  }

  /**
   * @return Success
   */
   ApiTestTypeGet(): Observable<TestType[]> {
    return this.ApiTestTypeGetResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param testTypes undefined
   * @return Success
   */
   ApiTestTypePostResponse(testTypes?: TestType): Observable<HttpResponse<TestType>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = testTypes;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/TestType`,
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
        let _body: TestType = null;
        _body = _resp.body as TestType
        return _resp.clone({body: _body}) as HttpResponse<TestType>;
      })
    );
  }

  /**
   * @param testTypes undefined
   * @return Success
   */
   ApiTestTypePost(testTypes?: TestType): Observable<TestType> {
    return this.ApiTestTypePostResponse(testTypes).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
   ApiTestTypeByIdGetResponse(id: number): Observable<HttpResponse<TestType>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/TestType/${id}`,
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
        let _body: TestType = null;
        _body = _resp.body as TestType
        return _resp.clone({body: _body}) as HttpResponse<TestType>;
      })
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
   ApiTestTypeByIdGet(id: number): Observable<TestType> {
    return this.ApiTestTypeByIdGetResponse(id).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `TestTypeService.ApiTestTypeByIdPutParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `testTypes`: 
   *
   * @return Success
   */
   ApiTestTypeByIdPutResponse(params: TestTypeService.ApiTestTypeByIdPutParams): Observable<HttpResponse<TestType>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.testTypes;
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/TestType/${params.id}`,
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
        let _body: TestType = null;
        _body = _resp.body as TestType
        return _resp.clone({body: _body}) as HttpResponse<TestType>;
      })
    );
  }

  /**
   * @param params The `TestTypeService.ApiTestTypeByIdPutParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `testTypes`: 
   *
   * @return Success
   */
   ApiTestTypeByIdPut(params: TestTypeService.ApiTestTypeByIdPutParams): Observable<TestType> {
    return this.ApiTestTypeByIdPutResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   */
   ApiTestTypeByIdDeleteResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/api/TestType/${id}`,
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
   ApiTestTypeByIdDelete(id: number): Observable<void> {
    return this.ApiTestTypeByIdDeleteResponse(id).pipe(
      map(_r => _r.body)
    );
  }
}

export module TestTypeService {

  /**
   * Parameters for ApiTestTypeByIdPut
   */
   export interface ApiTestTypeByIdPutParams {

    id: number;

    testTypes?: TestType;
  }
}
