import { Rover, RoverCamera } from "../../models/rovers";

export interface StoreState {
  camerasList: RoverCamera[];
  roversList: Rover[];
  roverCodesList: string[];
  initialDataReady: boolean;
}

export const initialState: StoreState = {
  camerasList: [],
  roversList: [],
  roverCodesList: [],
  initialDataReady: false
};
