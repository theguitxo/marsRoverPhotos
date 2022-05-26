import { CAMERA, STATUS } from "./constants";
import { RoverCamera } from "./rovers";

export interface ManifestPhoto {
  sol?: number;
  earth_date?: string;
  total_photos?: number;
  cameras?: CAMERA[];
  camerasInfo?: RoverCamera[];
}

export interface Manifest {
  name?: string;
  landing_date?: string;
  launch_date?: string;
  status?: STATUS;
  max_sol?: number;
  max_date?: string;
  total_photos?: number;
  photos?: ManifestPhoto[];
}

export interface ApiManifest {
  photo_manifest: Manifest
}

export interface APIPhotoCameraResponse {
  id: number;
  name: CAMERA;
  rover_id: number;
  full_name: string;
}

export interface APIPhotoRoverResponse {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: STATUS;
}

export interface APIPhotoDataReponse {
  id: number;
  sol: number;
  camera: APIPhotoCameraResponse;
  img_src: string;
  earth_date: string;
  rover: APIPhotoRoverResponse;
}

export interface APIPhotoResponse {
  photos: APIPhotoDataReponse[];
}
