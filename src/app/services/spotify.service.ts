import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http : HttpClient) { 

    console.log('spotify servicio listo ')

  }
    getNewRelease(){

      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQA-Ac-Es6nA4aKQNzelJ_9K9eXzGCZ_kmF375yAJQfM9Kj9yLxST_4FJB7_5sBKSBkcGJVWWob8qtPNfwQ_d1ouGM-jVWnHoSC7Vow0PF2AHq32ejQsDmQMnOQWzzj_uBR6tHHGVL8'
      })

      this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers } )
      .subscribe(data => {
        console.log(data)
      });
    }
  
}
