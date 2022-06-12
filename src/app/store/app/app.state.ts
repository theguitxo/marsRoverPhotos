import { Rover, RoverCamera } from "../../models/rovers";

/**
 * Interface for the store
 */
export interface StoreState {
  /**
   * List of cameras avaiables for the rovers
   */
  camerasList: RoverCamera[];
  /**
   * List of rovers
   */
  roversList: Rover[];
  /**
   * List of rover codes
   */
  roverCodesList: string[];
  /**
   * Indicator if initial data is ready for the app
   */
  initialDataReady: boolean;
  /**
   * List of the panels that are expanded
   */
  expandedPanel: string[];
  /**
   * Indicator that data is loading
   */
  loading: boolean;
  /**
   * Indicator that data is loaded
   */
  loaded: boolean;
  /**
   * Indicator that an error was occurred loading data
   */  
  errorLoading: boolean;
  /**
   * Error code for show in the error modal
   */
  errorCode: string;
  /**
   * Error message for show in the error modal
   */  
  errorMessage: string;
}

/**
 * Initial state of the store
 */
export const initialState: StoreState = {
  camerasList: [],
  roversList: [],
  roverCodesList: [],
  initialDataReady: false,
  expandedPanel: [],
  loading: false,
  loaded: false,
  errorLoading: false,
  errorCode: '',
  errorMessage: ''
};
