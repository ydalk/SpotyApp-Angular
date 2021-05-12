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
        'Bearer BQD2nO94NuhK20HsCFXAzI5UT75tShWpFmI5e0auG-BRQZQgzci4NonTCDY3bSbuk3ETGxLM7HDBCEM0r8XaR07NZStEQl7ACIpsGqVaYsrCs6y-8PAjQR-KBEVEoXvptOrNaoKztxc',
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
