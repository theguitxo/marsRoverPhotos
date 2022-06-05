import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiManifest, APIPhotoResponse } from "../models/manifest";
import { RoverPhotosRequest } from "../models/rovers";

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

  loadRoverPhotos(rover: string, requestData: RoverPhotosRequest): Observable<APIPhotoResponse> {
    const queryParams = [];
    queryParams.push(`sol=${requestData.sol}`);
    if (requestData.camera) {
      queryParams.push(`camera=${requestData.camera}`);
    }
    queryParams.push(`api_key=${this.apiKey}`);

    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?${queryParams.join('&')}`;

    return this.http.get<APIPhotoResponse>(url);
  }
}
