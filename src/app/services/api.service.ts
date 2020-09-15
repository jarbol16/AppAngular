import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cerveceria } from 'src/app/model/interfases/Cerveceria'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url_api = "https://api.openbrewerydb.org/breweries";
  
  constructor(private _http: HttpClient) { 
    
  }

  invocarAPi(): Observable<Cerveceria[]>{
    return this._http.get<Cerveceria[]>(this.url_api);
  }
}
