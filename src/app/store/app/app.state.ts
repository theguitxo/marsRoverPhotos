import { CodesNames, Rover, RoverCamera } from "../../models/rovers";

export interface StoreState {
  camerasList: RoverCamera[];
  roversList: Rover[];
  roverCodesNamesList: CodesNames[];
  initialDataReady: boolean;
}

export const initialState: StoreState = {
  camerasList: [],
  roversList: [],
  roverCodesNamesList: [],
  initialDataReady: false
};
