import { Component, OnInit } from '@angular/core';
import { PlacesServices } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  constructor(
    private placesServices: PlacesServices
  ) { }

  ngOnInit(): void {
    console.log(this.placesServices.userLocation)
  }

}
