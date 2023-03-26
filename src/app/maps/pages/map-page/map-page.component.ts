import { Component } from '@angular/core';
import { PlacesServices } from '../../services';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent {

  constructor(
    private placesServices: PlacesServices,
  ) { }


  get isUserLocationReady() {
    return this.placesServices.isUserLocationReady
  }


}
