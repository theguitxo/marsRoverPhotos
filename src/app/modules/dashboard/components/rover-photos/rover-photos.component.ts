import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { CAMERA } from "../../../../models/constants";
import { ManifestPhoto } from "../../../../models/manifest";

/**
 * Component to show rover photo information from a day
 */
@Component({
  selector: 'app-rover-photos',
  templateUrl: './rover-photos.component.html',
  styleUrls: ['./rover-photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class RoverPhotosComponent {
  /**
   * Information about the photos for a day
   */
  @Input() data!: ManifestPhoto;
  /**
   * Code of the rover to get the information
   */
  @Input() code!: string;

  /**
   * Constructor of the component
   * @param {Store<StoreState>} store Store for app data
   */
  constructor(
    private readonly router: Router
  ) {}

  /**
   * Navigates to the detail page to show the photos for a day and a camera
   * @param {number} day martian sol when the photo was taken
   * @param {CAMERA} camera code of camera that was took the photo
   */
  viewCameraPhotos(day: number, camera: CAMERA): void {
    this.router.navigate(['details', this.code, day, camera]);
  }

  /**
   * Navigates to the detail page to show the photos for a day
   * @param {number} day martian sol when the photo was taken
   */
  viewRoverPhotos(day: number): void {
    this.router.navigate(['details', this.code, day]);
  }
}