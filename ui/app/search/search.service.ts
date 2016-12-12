import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Http, Response  } from '@angular/http';

@Injectable()
export class SearchService {

  constructor (private http: Http) {}

  getInfluencers(keywords: string, page: number = 0) {
    return this.http.post('/api/search/influencers', { keywords: keywords, page: page})
        .map(this.extractData)
        .catch(this.handleError)
        .toPromise();
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    let body = error.json();
    return Observable.throw(body);
  }
}
