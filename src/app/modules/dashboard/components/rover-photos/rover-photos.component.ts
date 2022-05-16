import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ManifestPhoto } from "src/app/models/manifest";

@Component({
  selector: 'app-rover-photos',
  templateUrl: './rover-photos.component.html',
  styleUrls: ['./rover-photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class RoverPhotosComponent {
  @Input() data!: ManifestPhoto;
}