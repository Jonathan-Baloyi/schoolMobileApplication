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

import { Students } from '../models/students';

@Injectable()
export class StudentsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
   ApiStudentsGetResponse(): Observable<HttpResponse<Students[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Students`,
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
        let _body: Students[] = null;
        _body = _resp.body as Students[]
        return _resp.clone({body: _body}) as HttpResponse<Students[]>;
      })
    );
  }

  /**
   * @return Success
   */
   ApiStudentsGet(): Observable<Students[]> {
    return this.ApiStudentsGetResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param students undefined
   * @return Success
   */
   ApiStudentsPostResponse(students?: Students): Observable<HttpResponse<Students>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = students;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/Students`,
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
        let _body: Students = null;
        _body = _resp.body as Students
        return _resp.clone({body: _body}) as HttpResponse<Students>;
      })
    );
  }

  /**
   * @param students undefined
   * @return Success
   */
   ApiStudentsPost(students?: Students): Observable<Students> {
    return this.ApiStudentsPostResponse(students).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
   ApiStudentsByIdGetResponse(id: number): Observable<HttpResponse<Students>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Students/${id}`,
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
        let _body: Students = null;
        _body = _resp.body as Students
        return _resp.clone({body: _body}) as HttpResponse<Students>;
      })
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
   ApiStudentsByIdGet(id: number): Observable<Students> {
    return this.ApiStudentsByIdGetResponse(id).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `StudentsService.ApiStudentsByIdPutParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `students`: 
   *
   * @return Success
   */
   ApiStudentsByIdPutResponse(params: StudentsService.ApiStudentsByIdPutParams): Observable<HttpResponse<Students>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.students;
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/Students/${params.id}`,
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
        let _body: Students = null;
        _body = _resp.body as Students
        return _resp.clone({body: _body}) as HttpResponse<Students>;
      })
    );
  }

  /**
   * @param params The `StudentsService.ApiStudentsByIdPutParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `students`: 
   *
   * @return Success
   */
   ApiStudentsByIdPut(params: StudentsService.ApiStudentsByIdPutParams): Observable<Students> {
    return this.ApiStudentsByIdPutResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   */
   ApiStudentsByIdDeleteResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/api/Students/${id}`,
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
   ApiStudentsByIdDelete(id: number): Observable<void> {
    return this.ApiStudentsByIdDeleteResponse(id).pipe(
      map(_r => _r.body)
    );
  }
}

export module StudentsService {

  /**
   * Parameters for ApiStudentsByIdPut
   */
   export interface ApiStudentsByIdPutParams {

    id: number;

    students?: Students;
  }
}
