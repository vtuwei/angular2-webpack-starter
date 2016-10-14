import { Injectable } from "@angular/core";
import { AuthHttp } from "angular2-jwt";
import { Http, Response, Headers } from "@angular/http";
import { contentHeaders } from '../common/headers';
import "rxjs/add/operator/map";

@Injectable()
export class ApiService {

    constructor(private http: Http, private authHttp: AuthHttp) {}

    get(url: string) {
      var request = this.authHttp.get(url);

        request.subscribe((res) => {

          let headers: Headers = res.headers;

          let token: string = headers.get('x-renew-token');

          let id_token: string = localStorage.getItem('id_token');

          if(token && token.length > 0) {
            localStorage.removeItem('id_token');
            localStorage.setItem('id_token', token);
          }
       });

       return request;
    }

    getUnsecure(url: string) {
      return this.http.get(url);
    }

    postUnsecure(url: string, body: any) {

      let request: any = this.http.post(url, body, { headers: contentHeaders });

      return request;
    }
}
