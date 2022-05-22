import { CAMERA } from "./constants";
import { Manifest } from "./manifest";

export interface RoverPhotosRequest {
  sol: number;
  camera?: string;
}

export interface RoverListItem {
  code: string;
  name: string;
  camera: CAMERA[];
}

export interface RoverCamera {
  camera: CAMERA;
  description?: string;
}

export interface Rover extends Manifest {
  id: string;
  code: string;
  selectedIndex: number;
  cameras: RoverCamera[];
  haveManifest: boolean;
  loadingManifest: boolean;
  loadedManifest: boolean;
  errorLoadingManifest: boolean;
  photosPages?: number;
  currentPhotosPage?: number;
}
