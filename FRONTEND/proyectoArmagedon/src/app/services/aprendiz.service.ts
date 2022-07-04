import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AprendizService {
  private Appurl = "https://localhost:44313/";
  private Apiurl = "api/aprendiz/";


  constructor(private http: HttpClient) { }
  getListAprendices(): Observable<any>{

    return this.http.get(this.Appurl + this.Apiurl);

  }

  deleteAprendiz(id:number):Observable<any>{

    return this.http.delete(this.Appurl + this.Apiurl+id);
  }

  saveAprendiz(aprendiz:any): Observable<any>{
    return this.http.post(this.Appurl + this.Apiurl,aprendiz);

  }

  updateAprendiz(id:number,aprendiz:any): Observable<any>{
    return this.http.put(this.Appurl + this.Apiurl + id , aprendiz);
  }
}
