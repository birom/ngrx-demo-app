import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ColorService {
  constructor(private http: Http) {
  }

  getColor(index: number): Observable<[string, string]> {
    return this.http.get(`./assets/colors/${index}.json`, {})
      .map((res: Response) => res.json())
      .map((resJson: any) => [resJson.color, resJson.code]);
  }
}
