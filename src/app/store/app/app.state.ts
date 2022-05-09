import { Rover, RoverCamera } from "../../models/rovers";

export interface StoreState {
  camerasList: RoverCamera[];
  roversList: Rover[];
  initialDataReady: boolean;
  panelExpanding: string;
  panelExpanded: string;
}

export const initialState: StoreState = {
  camerasList: [],
  roversList: [],
  initialDataReady: false,
  panelExpanding: '',
  panelExpanded: ''
};
