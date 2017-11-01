import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ColorService {
  constructor(private http: Http) {
  }

  getColorCode(color: string): Observable<string> {
    return this.http.get(`./assets/colors/${color}.json`, {})
      .map((res: Response) => res.json())
      .map((resJson: any) => resJson.code);
  }
}
