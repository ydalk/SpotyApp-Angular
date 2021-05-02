import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent{

  constructor( private spotify: SpotifyService ) {

    this.spotify.getNewRelease();

// this.http.get('https://restcountries.eu/rest/v2/lang/es')
//     .subscribe( (resp: any) => {
//       this.paises = resp;      
//       console.log(resp);
//     })

}

}
