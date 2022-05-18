import { CAMERA, STATUS } from "./constants";

export interface ManifestPhoto {
  sol?: number;
  earth_date?: string;
  total_photos?: number;
  cameras?: CAMERA[];
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
