import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ApiManifest } from "../models/manifest";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiKey = 'jDOUZcRQgxp0zk4cGyqUeMOtb2ba2UVq2UHpLgG8';

  constructor(
    private readonly http: HttpClient
  ) {}

  loadRoverManifest(rover: string): Observable<ApiManifest> {
    const url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${this.apiKey}`;
    return this.http.get<ApiManifest>(url);
  }

  loadRoverPhotos(): Observable<any> {
    return of(null);
  }
}
