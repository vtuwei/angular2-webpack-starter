import { Injectable } from "@angular/core";
import { ApiService } from '../services/api.service';

@Injectable()
export class TestService {

  constructor( public apiService: ApiService ) {
  }

  test() {
    return this.apiService.get('/middleware/amrs/ws/rest/v1/person/11823c67-db24-4a05-87fc-bf9064632d35');
  }
}
