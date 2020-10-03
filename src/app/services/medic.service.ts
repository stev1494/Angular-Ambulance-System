import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { StorageRepository } from '../repositories/storage.repository';

@Injectable({
  providedIn: 'root'
})
export class MedicService {

  constructor(
    private readonly http: HttpClient,
  ) { }

    getAll(): Observable<any> {

      // Ahora con el uso de interceptores no es necesario mandar el header de esta manera.
      // const tokens = JSON.parse(this.storage.get('user'));
      // const headers = new HttpHeaders({
      //   authorization: `Bearer ${tokens.accessToken}`,
      // });

      return this.http.get(`${environment.pathApi}/medics`).pipe(pluck('result'));
    }
}
