import { RoverCamera } from "../models/rovers";

export interface StoreState {
  camerasList: RoverCamera[];
}

export const initialState: StoreState = {
  camerasList: []
};
