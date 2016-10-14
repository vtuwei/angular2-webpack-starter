import { Injectable } from "@angular/core";
import { ApiService } from '../services/api.service';

@Injectable()
export class LoginService {

  constructor( public apiService: ApiService ) {
  }

  login(body: {}) {

    let url = "/middleware/api/authenticate";
    return this.apiService.postUnsecure(url, body);
  }
}
