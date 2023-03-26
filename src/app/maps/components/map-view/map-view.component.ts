import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';
import { PlacesServices } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivelement!: ElementRef

  constructor(
    private placesServices: PlacesServices
  ) { }

  ngAfterViewInit(): void {

    if (!this.placesServices.userLocation) throw Error('No hay placesServices.userLocation')

    const map = new Map({
      container: this.mapDivelement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.placesServices.userLocation, // starting position [lng, lat]
      zoom: 14,
    });


  }
}
