import { mockState, mockStateDetails } from '../../mocks/state.selectors.mocks';
import * as SELECTORS from './app.selectors';

describe('Selectors', () => {
  it('sgetDetailsRover', () => {
    const result = SELECTORS.getDetailsRover(mockStateDetails);
    expect(result).toBe('curiosity');
  });

  it('getHasDetailsMinimumParams', () => {
    const result = SELECTORS.getHasDetailsMinimumParams(mockStateDetails);
    expect(result).toBeTruthy();
  });

  it('getIsLoading', () => {
    const result = SELECTORS.getIsLoading.projector(mockState.state);
    expect(result).toBeFalsy();
  });

  it('getIsLoaded', () => {
    const result = SELECTORS.getIsLoaded.projector(mockState.state);
    expect(result).toBeFalsy();
  });
  
  it('getIsErrorLoading', () => {
    const result = SELECTORS.getIsErrorLoading.projector(mockState.state);
    expect(result).toBeFalsy();
  });

  it('getErrorData', () => {
    const result = SELECTORS.getErrorData.projector(mockState.state);
    expect(result).toEqual({
      errorCode: '',
      errorMessage: ''
    });
  });

  it('getInitialDataIsReady', () => {
    const result = SELECTORS.getInitialDataIsReady.projector(mockState.state);
    expect(result).toBe(true);
  });

  it('getCodesList', () => {
    const result = SELECTORS.getCodesList.projector(mockState.state);
    expect(result.length).toBe(4);
  });

  it('getExpandedPanelStatus', () => {
    const result = SELECTORS.getExpandedPanelStatus.projector(mockState.state);
    expect(result.size).toBe(0);
  });

  it('getLoadManifestStatus', () => {
    const result = SELECTORS.getLoadManifestStatus.projector(mockState.state);
    expect(result.size).toBe(4);
  });

  it('getErrorLoadingManifestData', () => {
    const result = SELECTORS.getErrorLoadingManifestData.projector(mockState.state);
    expect(result.size).toBe(4);
  });

  it('getSelectedIndex', () => {
    const result = SELECTORS.getSelectedIndex.projector(mockState.state);
    expect(result.get('curiosity')).toBe(0);
  });
  
  it('getIsLoadingManifest', () => {
    const result = SELECTORS.getIsLoadingManifest.projector(mockState.state);
    expect(result.size).toBe(4);
    expect(result.get('curiosity')).toBeFalsy();
  });

  it('getIsLoadedManifest', () => {
    const result = SELECTORS.getIsLoadedManifest.projector(mockState.state);
    expect(result.size).toBe(4);
    expect(result.get('curiosity')).toBeFalsy();
  });

  it('getIsErrorLoadingManifest', () => {
    const result = SELECTORS.getIsErrorLoadingManifest.projector(mockState.state);
    expect(result.size).toBe(4);
    expect(result.get('curiosity')).toBeFalsy();
  });

  it('getHasManifest', () => {
    const result = SELECTORS.getHasManifest.projector(mockState.state);
    expect(result.size).toBe(4);
    expect(result.get('curiosity')).toBeFalsy();
  });

  it('getNoManifestLoading', () => {
    const result = SELECTORS.getNoManifestLoading.projector(mockState.state);
    expect(result).toBeTruthy();
  });

  it('getLaunchDates', () => {
    const result = SELECTORS.getLaunchDates.projector(mockState.state);
    expect(result.size).toBe(0);
  });

  it('getLandingDates', () => {
    const result = SELECTORS.getLandingDates.projector(mockState.state);
    expect(result.size).toBe(0);
  });

  it('getTotalPhotos', () => {
    const result = SELECTORS.getTotalPhotos.projector(mockState.state);
    expect(result.size).toBe(0);
  });

  it('getMaxSol', () => {
    const result = SELECTORS.getMaxSol.projector(mockState.state);
    expect(result.size).toBe(0);
  });

  it('getMaxDate', () => {
    const result = SELECTORS.getMaxDate.projector(mockState.state);
    expect(result.size).toBe(0);
  });

  it('getStatus', () => {
    const result = SELECTORS.getStatus.projector(mockState.state);
    expect(result.size).toBe(0);
  });

  it('getCamerasList', () => {
    const result = SELECTORS.getCamerasList.projector(mockState.state);
    expect(result.get('curiosity')?.length).toBe(7);
    expect(result.get('spirit')?.length).toBe(5);
    expect(result.get('opportunity')?.length).toBe(5);
    expect(result.get('perseverance')?.length).toBe(15);
    expect(result.size).toBe(4);
  });

  it('getPhotosList', () => {
    const result = SELECTORS.getPhotosList.projector(mockState.state);
    expect(result.size).toBe(0);
  });

  it('getCurrentPhotosPage', () => {
    const result = SELECTORS.getCurrentPhotosPage.projector(mockState.state);
    expect(result.size).toBe(0);
  });

  it('getPhotosPages', () => {
    const result = SELECTORS.getPhotosPages.projector(mockState.state);
    expect(result.size).toBe(0);
  });

  it('getEnablePreviousButton', () => {
    const result = SELECTORS.getEnablePreviousButton.projector(mockStateDetails);
    expect(result.size).toBe(0);
  });

  it('getEnableNextButton', () => {
    const result = SELECTORS.getEnableNextButton.projector(mockStateDetails);
    expect(result.size).toBe(0);
  });
  
  it('getDetailRoverPhotosList', () => {
    const result = SELECTORS.getDetailRoverPhotosList.projector(mockStateDetails.state, mockStateDetails.router);
    expect(result.length).toBe(0);
  });

  it('getHasDetailRoverPhotosList', () => {
    const result = SELECTORS.getHasDetailRoverPhotosList.projector(mockStateDetails.state, mockStateDetails.router);
    expect(result).toBeFalsy();
  });

  it('getRoverPhotoListTotalPages', () => {
    const result = SELECTORS.getRoverPhotoListTotalPages.projector(mockStateDetails.state, mockStateDetails.router);
    expect(result).toBe(0);
  });

  it('getDetailsCurrentPage', () => {
    const result = SELECTORS.getDetailsCurrentPage.projector(mockStateDetails.state, mockStateDetails.router);
    expect(result).toBeUndefined();
  });
});
