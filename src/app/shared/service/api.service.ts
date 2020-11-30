import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = `https://www.reddit.com`;

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    public get(url): Observable<any> {
        return this.httpClient.get(`${BASE_URL}${url}`);
    }

    public post(url, data): Observable<any> {
        return this.httpClient.post(`${BASE_URL}${url}`, data, {
            headers: this.createHeader()
        });
    }

    public put(url, data): Observable<any> {
        return this.httpClient.put(`${BASE_URL}${url}`, data, {
            headers: this.createHeader()
        });
    }

    public delete(url): Observable<any> {
        return this.httpClient.delete(`${BASE_URL}${url}`, {
            headers: this.createHeader()
        });
    }

    public createHeader(language?: string, customHeders?: {}): HttpHeaders {
        const headers = new HttpHeaders({
            ...customHeders,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        return headers;
    }
}
