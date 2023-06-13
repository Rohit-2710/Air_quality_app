import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { ApiServiceService } from '../shared/api-service.service';
interface buttonData {
  url: string;
  type: string;
}

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnChanges {
  longitude: string;
  latitude: string;
  url: string;
  @Input() data: any;
  @Output() sideNavClose = new EventEmitter<boolean>();

  constructor(private apiService: ApiServiceService) {}

  ngOnChanges(changes: SimpleChanges) {
    this.latitude = changes['data'].currentValue?.CapitalLatitude;
    this.longitude = changes['data'].currentValue?.CapitalLongitude;
  }
  externalClicked() {
    this.sideNavClose.emit(true);
  }
  getData = async (data: buttonData) => {
    const type = data.type;
    if (this.latitude && this.longitude) {
      const response = this.apiService
        .getData({
          latitude: this.latitude,
          longitude: this.longitude,
          url: data.url,
        })
        .then((data) => console.log('successfull execution'))
        .catch((err) => console.log(err));
    }
  };
}
