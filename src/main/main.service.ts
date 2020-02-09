import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import { Injectable } from "@angular/core";

@Injectable()
export class MainService{
    private url: string ="apidata/data.json"
constructor(private http: Http){}

   getEmployees()
   {
       return this.http.get(this.url)
       .map((response: Response)=> response.json());

   }

    }