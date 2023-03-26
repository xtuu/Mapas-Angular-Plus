import { Component, OnInit } from '@angular/core';
import { PlacesServices } from '../../services';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {

  constructor(
    private placesServices: PlacesServices
  ) { }

  ngOnInit(): void {
  }

}
