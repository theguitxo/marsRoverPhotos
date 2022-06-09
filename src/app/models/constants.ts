/**
 * Types of rover's cameras
 */
export type CAMERA = 
  'FHAZ' | 'RHAZ' | 'MAST' | 'CHEMCAM' | 'MAHLI' | 'MARDI' | 'NAVCAM' | 'PANCAM' | 'MINITES' |
  'EDL_RUCAM' | 'EDL_RDCAM' | 'EDL_DDCAM' | 'EDL_PUCAM1' | 'EDL_PUCAM2' | 'NAVCAM_LEFT' | 'NAVCAM_RIGHT'|
  'MCZ_RIGHT' | 'MCZ_LEFT' | 'FRONT_HAZCAM_LEFT_A' | 'FRONT_HAZCAM_RIGHT_A' | 'REAR_HAZCAM_LEFT' |
  'REAR_HAZCAM_RIGHT' | 'SKYCAM' | 'SHERLOC_WATSON';

/**
 * Status that can have a camera
 */
export type STATUS = 'active' | 'complete';

/**
 * Rovers data fields for the store
 */
export enum ROVER_FIELDS {
  LOADING_MANIFEST = 'loadingManifest',
  LOADED_MANIFEST = 'loadedManifest',
  ERROR_LOADING_MANIFEST = 'errorLoadingManifest',
  CODE = 'code',
  SELECTED_INDEX = 'selectedIndex',
  CAMERAS = 'cameras',
  HAVE_MANIFEST = 'haveManifest',
  LANDING_DATE = 'landing_date',
  LAUNCH_DATE = 'launch_date',
  STATUS = 'status',
  MAX_SOL = 'max_sol',
  MAX_DATE = 'max_date',
  TOTAL_PHOTOS = 'total_photos',
  PHOTOS = 'photos',
  PHOTOS_PAGES = 'photosPages',
  CURRENT_PHOTOS_PAGE = 'currentPhotosPage',
  ERROR_CODE = 'errorCode',
  ERROR_MESSAGE = 'errorMessage'
}

/**
 * Number of items for photo information each page
 */
export const PHOTOS_PER_PAGE = 40;

/**
 * Number of photos (files) in photo details page
 */
export const DETAIL_PHOTOS_PER_PAGE = 50;

/**
 * Params for the details apge
 */
export enum DETAILS_PARAMS {
  CODE = 'code',
  SOL = 'sol',
  CAMERA = 'camera'
}
