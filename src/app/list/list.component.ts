import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../shared/api-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  dataSource: any;
  activeCloumns: any;
  constructor(private apiService: ApiServiceService) {}
  ngOnInit(): void {
    this.apiService.apiData$.subscribe((data) => {
      this.activeCloumns = Object.keys(data.data.data[0]);
      this.dataSource = data.data.data;
    });
  }
}
