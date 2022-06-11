import { CAMERA } from "./constants";
import { Manifest } from "./manifest";

/**
 * Inteface with values for request a rover photos list
 */
export interface RoverPhotosRequest {
  /**
   * Maritan sol for request the photos
   */
  sol: string;
  /**
   * Rover camera for request the photos
   */
  camera?: string;
}

/**
 * Interface for rover item for lists
 */
export interface RoverListItem {
  /**
   * Rover code
   */
  code: string;
  /**
   * Rover name
   */
  name: string;
  /**
   * Camera list of camera
   */
  camera: CAMERA[];
}

/**
 * Interface with information for a rover camera
 */
export interface RoverCamera {
  /**
   * Camera code
   */
  camera: CAMERA;
  /**
   * Camera description
   */
  description?: string;
}

/**
 * Interface with information for a rover photo
 */
export interface RoverPhoto {
  /**
   * Id of photo
   */
  id: number;
  /**
   * Photo camera code
   */
  camera: CAMERA;
  /**
   * Photo camera full name
   */
  cameraFullName: string;
  /**
   * Photo earth date
   */
  earthDate: string;
  /**
   * Photo martian sol
   */
  sol: number;
  /**
   * URL of the photo
   */
  imgSrc: string;
}

/**
 * Interface with information about a rover
 */
export interface Rover extends Manifest {
  /**
   * Identificator for the rover
   */
  id: string;
  /**
   * Code for the rover
   */
  code: string;
  /**
   * Tab index selected in the pnanel
   */
  selectedIndex: number;
  /**
   * List of rover cameras
   */
  cameras: RoverCamera[];
  /**
   * Indicator that the manifest info of rover is in
   */
  haveManifest: boolean;
  /**
   * Indicator that is loading the manifest information
   */
  loadingManifest: boolean;
  /**
   * Indicator that the manifest information is loaded
   */
  loadedManifest: boolean;
  /**
   * Indicator that an error has occurred loading manifest information
   */
  errorLoadingManifest: boolean;
  /**
   * Total number of information photo pages
   */
  photosPages?: number;
  /**
   * The current photo page is showing
   */
  currentPhotosPage?: number;
  /**
   * Code to show in the error dialog
   */
  errorCode?: string;
  /**
   * Message to show in the error dialog
   */
  errorMessage?: string;
  /**
   * List of rover photos (images)
   */
  roverPhotos?: RoverPhoto[];
  /**
   * Total number of rover photos (images)
   */
  roverPhotosTotalItems?: number;
  /**
   * Total number of rover photo pages (images)
   */
  roverPhotosTotalPages?: number;
  /**
   * Number of rover photo page that is shown (images)
   */
  roverPhotosCurrentPage?: number;
}
