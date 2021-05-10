import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent{

  nuevasCanciones : any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService ) {

    this.loading = true;

    this.spotify.getNewRelease()
    .subscribe( (data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    });
  }
  
// this.http.get('https://restcountries.eu/rest/v2/lang/es')
//     .subscribe( (resp: any) => {
//       this.paises = resp;      
//       console.log(resp);
//     })

  

}
