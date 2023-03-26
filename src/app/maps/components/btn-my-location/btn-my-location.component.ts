import { Component } from '@angular/core';
import { MapService, PlacesServices } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent {

  constructor(
    private placesServices: PlacesServices,
    private mapServices: MapService
  ) { }




  miUbicacion() {
    
    if (!this.placesServices.userLocation) throw Error('No hay ubicacion de usuario');
    if (!this.mapServices.isMapReady) throw Error('No hay mapa');

    this.mapServices.flyTo(this.placesServices.userLocation!)
  }
}
