import { Component } from '@angular/core';
import { Feature } from '../../interfaces/places';
import { MapService, PlacesServices } from '../../services';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  public selectedId: string = ''

  constructor(
    private placesServices: PlacesServices,
    private mapService: MapService
  ) { }


  get isLoadingPlaces(): boolean {
    return this.placesServices.isLoadingPlaces;
  }


  get places(): Feature[] {
    return this.placesServices.places
  }



  flyTo(place: Feature) {
    this.selectedId = place.id
    const [lng, lat] = place.center;
    this.mapService.flyTo([lng, lat])
  }


  getDirections(place: Feature) {
    if (!this.placesServices.userLocation) throw Error('No hay userLocation')


    this.placesServices.deletePlaces()

    const start = this.placesServices.userLocation;
    const end = place.center as [number, number];

    this.mapService.getRouteBetweenPoints(start, end)
  }

}
