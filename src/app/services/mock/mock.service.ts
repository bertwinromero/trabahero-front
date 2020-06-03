import { Injectable } from '@angular/core';
import { provinces, cities } from './mock-objects';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  getProvinces(): string[] {
    return provinces;
  }

  getCities(): string[] {
    return cities;
  }
}
