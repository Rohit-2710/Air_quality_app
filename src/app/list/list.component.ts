import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../shared/api-service.service';
import { data } from '../shared/countriesData';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  dataSource: any;
  activeColumns: any;
  constructor(private apiService: ApiServiceService) {}
  ngOnInit(): void {
    this.apiService.apiData$.subscribe((data: any) => {
      if (Object.keys(data).length) {
        let objects = data.data?.data[0];
        this.dataSource = data.data?.data;
        this.activeColumns = Object.keys(objects);
        console.log(this.dataSource);
        console.log(this.activeColumns);
      }
    });
  }
}
