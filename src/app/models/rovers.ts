import { CAMERA } from "./constants";
import { Manifest } from "./manifest";

export interface RoverListItem {
  code: string;
  name: string;
  camera: CAMERA[];
}

export interface RoverCamera {
  camera: CAMERA;
  description: string;
}

export interface Rover extends Manifest {
  id: string;
  code: string;
  cameras: RoverCamera[];
  haveManifest: boolean;
  loadingManifest: boolean;
  loadedManifest: boolean;
  errorLoadingManifest: boolean;
}

export interface CodesNames {
  code: string;
  name?: string;
}
