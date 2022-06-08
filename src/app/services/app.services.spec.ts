import { ApiService } from "./app.services";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ApiManifest, APIPhotoResponse } from "../models/manifest";
import { curiosityManifestMockData } from '../mocks/curiosity.manifest.mock';
import { curiosityPhotosMockData } from '../mocks/curiosity.photos.mocks';
import { RoverPhotosRequest } from "../models/rovers";
import * as MOCKS_CONSTANTS from '../mocks/constants.mocks';

describe('ApiService', () => {

  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ApiService
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    });
  });

  beforeEach(() => {
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get manifest for a rover', () => {
    const url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${MOCKS_CONSTANTS.ROVER_TEST}?api_key=${MOCKS_CONSTANTS.API_KEY}`;

    service.loadRoverManifest(MOCKS_CONSTANTS.ROVER_TEST).subscribe((res: ApiManifest) => {
      expect(res).toEqual(curiosityManifestMockData);
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');

    req.flush(curiosityManifestMockData);
  });

  it('get photos list for a sol and camera from a rover', () => {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${MOCKS_CONSTANTS.ROVER_TEST}/photos?sol=${MOCKS_CONSTANTS.SOL_TEST}&camera=${MOCKS_CONSTANTS.CAMERA_TEST}&api_key=${MOCKS_CONSTANTS.API_KEY}`;

    const requestData: RoverPhotosRequest = {
      sol: MOCKS_CONSTANTS.SOL_TEST,
      camera: MOCKS_CONSTANTS.CAMERA_TEST
    };

    service.loadRoverPhotos(MOCKS_CONSTANTS.ROVER_TEST, requestData).subscribe((res: APIPhotoResponse) => {
      expect(res).toEqual(curiosityPhotosMockData);
      expect(res.photos.length).toBe(8);
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');

    req.flush(curiosityPhotosMockData);
  });
});
