export type CAMERA = 
  'FHAZ' | 'RHAZ' | 'MAST' | 'CHEMCAM' | 'MAHLI' | 'MARDI' | 'NAVCAM' | 'PANCAM' | 'MINITES' |
  'EDL_RUCAM' | 'EDL_RDCAM' | 'EDL_DDCAM' | 'EDL_PUCAM1' | 'EDL_PUCAM2' | 'NAVCAM_LEFT' | 'NAVCAM_RIGHT'|
  'MCZ_RIGHT' | 'MCZ_LEFT' | 'FRONT_HAZCAM_LEFT_A' | 'FRONT_HAZCAM_RIGHT_A' | 'REAR_HAZCAM_LEFT' |
  'REAR_HAZCAM_RIGHT' | 'SKYCAM' | 'SHERLOC_WATSON';

export type STATUS = 'active' | 'complete';

export enum ROVER_FIELDS {
  LOADING_MANIFEST = 'loadingManifest',
  LOADED_MANIFEST = 'loadedManifest',
  ERROR_LOADING_MANIFEST = 'errorLoadingManifest',
  CODE = 'code',
  HAVE_MANIFEST = 'haveManifest',
  LANDING_DATE = 'landing_date',
  LAUNCH_DATE = 'launch_date',
  STATUS = 'status',
  MAX_SOL = 'max_sol',
  MAX_DATE = 'max_date',
  TOTAL_PHOTOS = 'total_photos',
  PHOTOS = 'photos'
};
