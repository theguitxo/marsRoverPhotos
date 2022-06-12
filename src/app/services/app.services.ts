import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiManifest, APIPhotoResponse } from "../models/manifest";
import { RoverPhotosRequest } from "../models/rovers";

/**
 * Service for call the services of the Nasa API
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /**
   * API Key for use with the end-points
   */
  apiKey = 'jDOUZcRQgxp0zk4cGyqUeMOtb2ba2UVq2UHpLgG8';

  /**
   * Constructor for the service
   * @param http Angular service for HTTP calls
   */
  constructor(
    private readonly http: HttpClient
  ) {}

  /**
   * Loads a rover manifest
   * @param {string} rover Name of the rover for load their manifest
   * @returns {Observable<ApiManifest>} Observable with the manifest for a rover
   */
  loadRoverManifest(rover: string): Observable<ApiManifest> {
    const url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${this.apiKey}`;
    return this.http.get<ApiManifest>(url);
  }

  /**
   * Loads the list of photos for a rover, day, and camera
   * @param {string} rover Name of the rover to load their photos
   * @param {RoverPhotosRequest} requestData Data for make the request: martian sol and camera (optional)
   * @returns {Observable<APIPhotoResponse>} 
   */
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
