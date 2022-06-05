import { Rover, RoverCamera } from "../../models/rovers";

export interface StoreState {
  camerasList: RoverCamera[];
  roversList: Rover[];
  roverCodesList: string[];
  initialDataReady: boolean;
  expandedPanel: string[];
  loading: boolean;
  loaded: boolean;
  errorLoading: boolean;
  errorCode: string;
  errorMessage: string;
}

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
