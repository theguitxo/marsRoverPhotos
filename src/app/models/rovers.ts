import { CAMERA } from "./constants";

export interface RoverCamera {
  camera: CAMERA;
  description: string;
}
export interface Rover {
  code: string;
  name: string;
  description: string;
  cameras: any[];
}