import { Component } from '@angular/core';
import { PlacesServices } from '../../services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {


  private debounceTimer?: NodeJS.Timeout;



  constructor(
    private placesServices: PlacesServices
  ) { }

  onQueryChanged(query: string = '') {

    if (this.debounceTimer) clearTimeout(this.debounceTimer)


    this.debounceTimer = setTimeout(() => {

      this.placesServices.getPlacesByQuery(query)

    }, 500);




  }


}
