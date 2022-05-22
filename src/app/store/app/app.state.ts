import { Rover, RoverCamera } from "../../models/rovers";

export interface StoreState {
  camerasList: RoverCamera[];
  roversList: Rover[];
  roverCodesList: string[];
  initialDataReady: boolean;
  expandedPanel: string[];
}

export const initialState: StoreState = {
  camerasList: [],
  roversList: [],
  roverCodesList: [],
  initialDataReady: false,
  expandedPanel: []
};
