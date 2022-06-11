import { CAMERA, STATUS } from "./constants";
import { RoverCamera } from "./rovers";

/**
 * Interface for information of photos in rover manifest
 */
export interface ManifestPhoto {
  /**
   * Martian sol of photos
   */
  sol?: number;
  /**
   * Earth date of photos
   */
  earth_date?: string;
  /**
   * Total photos of day
   */
  total_photos?: number;
  /**
   * Camera photos
   */
  cameras?: CAMERA[];
  /**
   * Camera photos info
   */
  camerasInfo?: RoverCamera[];
}

/**
 * Information about a rover
 */
export interface Manifest {
  /**
   * Name of rover
   */
  name?: string;
  /**
   * Landing earth date
   */
  landing_date?: string;
  /**
   * Launching earth date
   */
  launch_date?: string;
  /**
   * Status of the rover
   */
  status?: STATUS;
  /**
   * Last martian day
   */
  max_sol?: number;
  /**
   * Last earth date
   */
  max_date?: string;
  /**
   * Total rover photos
   */
  total_photos?: number;
  /**
   * List of rover photos
   */
  photos?: ManifestPhoto[];
}

/**
 * Interface for the API reponse about the rover manifest
 */
export interface ApiManifest {
  /**
   * Object with rover photo data
   */
  photo_manifest: Manifest
}

/**
 * Interface with photo camera API information
 */
export interface APIPhotoCameraResponse {
  /**
   * Id of camera
   */
  id: number;
  /**
   * Name of camera
   */
  name: CAMERA;
  /**
   * Id of rover
   */
  rover_id: number;
  /**
   * Full name of camera
   */
  full_name: string;
}

/**
 * Interface for rover info response
 */
export interface APIPhotoRoverResponse {
  /**
   * Id for rover
   */
  id: number;
  /**
   * Rover name
   */
  name: string;
  /**
   * Landing earth date
   */
  landing_date: string;
  /**
   * Launch earth date
   */
  launch_date: string;
  /**
   * Rover status
   */
  status: STATUS;
}

/**
 * Interface with photo information from the API
 */
export interface APIPhotoDataReponse {
  /**
   * Photo id
   */
  id: number;
  /**
   * Martian sol of the photo
   */
  sol: number;
  /**
   * Information about the camera that took the photo
   */
  camera: APIPhotoCameraResponse;
  /**
   * URL to the image
   */
  img_src: string;
  /**
   * Earth date of the photo
   */
  earth_date: string;
  /**
   * Information about the rover that took the photo
   */
  rover: APIPhotoRoverResponse;
}

/**
 * Interface with information about the reponse for photos from the API
 */
export interface APIPhotoResponse {
  /**
   * List of photos received from the API
   */
  photos: APIPhotoDataReponse[];
}
