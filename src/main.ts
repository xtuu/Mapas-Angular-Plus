import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1IjoiYWRyaWFueHR1dSIsImEiOiJjbGZwd3d2MDMxNTcwM3lxcTE3bjg4ZTd1In0.BzoCnEWn3vaJc6EDNwuHoQ';



if (!navigator.geolocation) {
  alert('El navegador no soporta la geolocalizacion')
  throw new Error('El navegador no soporta la geolocalizacion')
}



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
