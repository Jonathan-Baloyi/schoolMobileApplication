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

import { Subjects } from '../models/subjects';

@Injectable()
export class SubjectService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
   ApiSubjectGetResponse(): Observable<HttpResponse<Subjects[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Subject`,
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
        let _body: Subjects[] = null;
        _body = _resp.body as Subjects[]
        return _resp.clone({body: _body}) as HttpResponse<Subjects[]>;
      })
    );
  }

  /**
   * @return Success
   */
   ApiSubjectGet(): Observable<Subjects[]> {
    return this.ApiSubjectGetResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param subjects undefined
   * @return Success
   */
   ApiSubjectPostResponse(subjects?: Subjects): Observable<HttpResponse<Subjects>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = subjects;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/Subject`,
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
        let _body: Subjects = null;
        _body = _resp.body as Subjects
        return _resp.clone({body: _body}) as HttpResponse<Subjects>;
      })
    );
  }

  /**
   * @param subjects undefined
   * @return Success
   */
   ApiSubjectPost(subjects?: Subjects): Observable<Subjects> {
    return this.ApiSubjectPostResponse(subjects).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
   ApiSubjectByIdGetResponse(id: number): Observable<HttpResponse<Subjects>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Subject/${id}`,
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
        let _body: Subjects = null;
        _body = _resp.body as Subjects
        return _resp.clone({body: _body}) as HttpResponse<Subjects>;
      })
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
   ApiSubjectByIdGet(id: number): Observable<Subjects> {
    return this.ApiSubjectByIdGetResponse(id).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `SubjectService.ApiSubjectByIdPutParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `subjects`: 
   *
   * @return Success
   */
   ApiSubjectByIdPutResponse(params: SubjectService.ApiSubjectByIdPutParams): Observable<HttpResponse<Subjects>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.subjects;
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/Subject/${params.id}`,
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
        let _body: Subjects = null;
        _body = _resp.body as Subjects
        return _resp.clone({body: _body}) as HttpResponse<Subjects>;
      })
    );
  }

  /**
   * @param params The `SubjectService.ApiSubjectByIdPutParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `subjects`: 
   *
   * @return Success
   */
   ApiSubjectByIdPut(params: SubjectService.ApiSubjectByIdPutParams): Observable<Subjects> {
    return this.ApiSubjectByIdPutResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   */
   ApiSubjectByIdDeleteResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/api/Subject/${id}`,
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
   ApiSubjectByIdDelete(id: number): Observable<void> {
    return this.ApiSubjectByIdDeleteResponse(id).pipe(
      map(_r => _r.body)
    );
  }
}

export module SubjectService {

  /**
   * Parameters for ApiSubjectByIdPut
   */
   export interface ApiSubjectByIdPutParams {

    id: number;

    subjects?: Subjects;
  }
}
