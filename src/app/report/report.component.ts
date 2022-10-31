import { Component, OnInit } from '@angular/core';
//import {Value} from "./Value.get";
import { from } from 'rxjs';
import {HttpClient} from'@angular/common/http';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  valuelist: any;

  constructor(private http: HttpClient ,) { }

  ngOnInit(): void {
    this.http
    .get<any>(
      'https://smof.moe.go.th/bud-api/api/BudReportList/type?type=1'
    )
    .subscribe((Response) => {
      console.log('Response',Response);
      this.valuelist = Response.Value
    });
  }

}
