import { Component } from '@angular/core';
import {CovidserviceService} from './covidservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covidapp';
  //servicedata:any[];
  cols:any[]=[];
  selcols:any[]=[];
  servicedata:any[];
  selectedColumns: any[];
  

  constructor(public appservice: CovidserviceService) {
    /*below code is for the service subscription */
    this.appservice.GetAllRecords().subscribe(
      (res)=> {
      console.log(res);
      let resources= res["raw_data"];
      this.servicedata=resources;   
    //console.log(this.selectedColumns);
    /*below code is to set dynamic headers */
      Object.keys(this.servicedata[0]).forEach(item=>{
      this.cols.push({field:item,header:item});
      this.selcols=this.cols;
      })
    });
      /*below code is for toggle features of primeng table */
      this.selectedColumns = this.cols; 
   }

   ngOnInit()
   {
    
 
  
   }

   /*below code is to bring the checked/unchecked columns in order */
   modelChange(event) {
    console.log('change fired')
    this.selectedColumns = event;
    this.selectedColumns.sort(
      function compare(a, b) {
        if (a.field < b.field)
          return -1;
        if (a.field > b.field)
          return 1;
        return 0;
      }

    );
    console.log(this.selectedColumns);
  }
}
