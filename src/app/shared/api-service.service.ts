import { Injectable } from '@angular/core';
import axios from 'axios';
import { BehaviorSubject } from 'rxjs';
export interface params {
  latitude: string;
  longitude: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private apiData = new BehaviorSubject<any>({});
  public apiData$ = this.apiData.asObservable();
  constructor() {}

  getData = async (params: params) => {
    console.log(params);
    const options = {
      method: 'GET',
      url: '',
      params: {
        lat: params?.latitude,
        lon: params?.longitude,
        units: 'auto',
        lang: 'en',
      },
      headers: {
        'X-RapidAPI-Key': '00e3535212mshf31f59605033a62p154b73jsncc1f14dc00b6',
        'X-RapidAPI-Host': 'air-quality.p.rapidapi.com',
      },
    };
    options.url = params.url;

    try {
      const returned = await axios.request(options);
      this.apiData.next(returned);
    } catch (error) {
      return error;
    }
  };
}
