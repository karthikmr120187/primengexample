import { Injectable } from '@angular/core';
import{HttpClientModule, HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CovidserviceService {

   //private headers = new Headers({ 'Content-Type': 'application/json' });
   _baseUrl: string = '';

   // For Using Fake API by Using It's URL
   constructor(private http: HttpClient) {
     this._baseUrl = "https://api.covid19india.org/";
   }
 
   // To fill the Datatable for Default Table [Dummy Data]
   public GetAllRecords() {
     return this.http.get(this._baseUrl + 'raw_data4.json');
       // .pipe(map((res:Response) => {
       //   return res.json();
       // }))
       //.catch(this.handleError);
   }
}
