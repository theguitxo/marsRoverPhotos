import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { CAMERA } from "src/app/models/constants";
import { ManifestPhoto } from "src/app/models/manifest";

@Component({
  selector: 'app-rover-photos',
  templateUrl: './rover-photos.component.html',
  styleUrls: ['./rover-photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class RoverPhotosComponent {
  @Input() data!: ManifestPhoto;
  @Input() code!: string;

  constructor(
    private readonly router: Router
  ) {}

  viewCameraPhotos(day: number, camera: CAMERA): void {
    this.router.navigate(['details', this.code, day, camera]);
  }

  viewRoverPhotos(day: number): void {
    this.router.navigate(['details', this.code, day]);
  }
}