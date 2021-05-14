import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('spotify servicio listo ');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer QB8dHykhQdTbCoHbo9GDjng-rKk7okPwRg2YGD1oAJIr3trKqDMStUpjio5phNsKykxkMKCnygpR-V7LFyWTU4bQ6YuB_3AF0mAOxpM3OnlC20w2NXsFe8pDH1kHsxT0IiV-olXA_0',
    });

    return this.http.get(url, { headers });
  }

  getNewRelease() {
    // const headers = new HttpHeaders({
    //     'Authorization': 'Bearer BQA8kfasl0RDpqZT_JPwQWHF0puMH0QItdrM3AVu3yiqtZRD3E9_90qghEWpMXEP17VhKtK7VYJQgBWH2DRhMBDCkpT0hWGw9rnjbOTGLEJtHyco5vM5WEnmb7CzMCPOR1b8eZxaOLU'
    // })

    return this.getQuery(`browse/new-releases?limit=20`).pipe(
      map((data) => data['albums'].items)
    );

    //return this.http.get(`https://api.spotify.com/v1/browse/new-releases`,{ headers } )
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data) => data['artists'].items)
    );
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);

    //      .pipe( map( data => data['artists'].items));
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=US`).pipe(
      map((data) => data['tracks'])
    );
  }
}
