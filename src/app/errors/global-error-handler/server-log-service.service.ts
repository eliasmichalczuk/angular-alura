import { Injectable } from '@angular/core';
import { ServerLog } from './server-log';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerLogServiceService {

  constructor(private http: HttpClient) { }

  log(serverLog: ServerLog) {
    return this.http.post('localhost:7000/infra/log', serverLog);
  }
}
