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

  error: boolean;

  constructor( private spotify: SpotifyService ) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewRelease()
    .subscribe( (data: any) => {

      this.nuevasCanciones = data;
      this.loading = false;
    }, (errorServicio)=>{
      
      this.loading = false;
      this.error = true;
      console.log(errorServicio.error.error.message);
      this.mensajeError = errorServicio.error.error.message;
    });
  }

//prueba inicial del ejercicio
// this.http.get('https://restcountries.eu/rest/v2/lang/es')
//     .subscribe( (resp: any) => {
//       this.paises = resp;      
//       console.log(resp);
//     })

  

}
