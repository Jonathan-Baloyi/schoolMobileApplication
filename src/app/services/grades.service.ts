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

import { Grades } from '../models/grades';

@Injectable()
export class GradesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
   ApiGradesGetResponse(): Observable<HttpResponse<Grades[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Grades`,
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
        let _body: Grades[] = null;
        _body = _resp.body as Grades[]
        return _resp.clone({body: _body}) as HttpResponse<Grades[]>;
      })
    );
  }

  /**
   * @return Success
   */
   ApiGradesGet(): Observable<Grades[]> {
    return this.ApiGradesGetResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param grades undefined
   * @return Success
   */
   ApiGradesPostResponse(grades?: Grades): Observable<HttpResponse<Grades>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = grades;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/Grades`,
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
        let _body: Grades = null;
        _body = _resp.body as Grades
        return _resp.clone({body: _body}) as HttpResponse<Grades>;
      })
    );
  }

  /**
   * @param grades undefined
   * @return Success
   */
   ApiGradesPost(grades?: Grades): Observable<Grades> {
    return this.ApiGradesPostResponse(grades).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
   ApiGradesByIdGetResponse(id: number): Observable<HttpResponse<Grades>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Grades/${id}`,
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
        let _body: Grades = null;
        _body = _resp.body as Grades
        return _resp.clone({body: _body}) as HttpResponse<Grades>;
      })
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
   ApiGradesByIdGet(id: number): Observable<Grades> {
    return this.ApiGradesByIdGetResponse(id).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `GradesService.ApiGradesByIdPutParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `grades`: 
   *
   * @return Success
   */
   ApiGradesByIdPutResponse(params: GradesService.ApiGradesByIdPutParams): Observable<HttpResponse<Grades>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.grades;
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/Grades/${params.id}`,
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
        let _body: Grades = null;
        _body = _resp.body as Grades
        return _resp.clone({body: _body}) as HttpResponse<Grades>;
      })
    );
  }

  /**
   * @param params The `GradesService.ApiGradesByIdPutParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `grades`: 
   *
   * @return Success
   */
   ApiGradesByIdPut(params: GradesService.ApiGradesByIdPutParams): Observable<Grades> {
    return this.ApiGradesByIdPutResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   */
   ApiGradesByIdDeleteResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/api/Grades/${id}`,
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
   ApiGradesByIdDelete(id: number): Observable<void> {
    return this.ApiGradesByIdDeleteResponse(id).pipe(
      map(_r => _r.body)
    );
  }
}

export module GradesService {

  /**
   * Parameters for ApiGradesByIdPut
   */
   export interface ApiGradesByIdPutParams {

    id: number;

    grades?: Grades;
  }
}
