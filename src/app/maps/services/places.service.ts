import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feature, PlacesResponse } from '../interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class PlacesServices {

  public userLocation?: [number, number];
  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];

  get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }


  constructor(
    private hhtp: HttpClient
  ) {
    this.getUserLocation()
  }


  public async getUserLocation(): Promise<[number, number]> {

    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(

        ({ coords }) => {
          this.userLocation = [coords.longitude, coords.latitude]
          resolve(this.userLocation)
        },
        (err) => {
          alert('No se pudo obtener la geolocalizacion')
          console.log(err)
          reject();
        }
      )
    })

  }




  getPlacesByQuery(query: string = '') {

    this.isLoadingPlaces = true;

    this.hhtp.get<PlacesResponse>(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?language=es&limit=5&access_token=pk.eyJ1IjoiYWRyaWFueHR1dSIsImEiOiJjbGZwd3d2MDMxNTcwM3lxcTE3bjg4ZTd1In0.BzoCnEWn3vaJc6EDNwuHoQ`)
      .subscribe(response => {
        this.isLoadingPlaces = false;
        this.places = response.features;
      })

  }


}
