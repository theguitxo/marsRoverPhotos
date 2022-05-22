import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ManifestPhoto } from "src/app/models/manifest";

@Component({
  selector: 'app-rover-photos',
  templateUrl: './rover-photos.component.html',
  styleUrls: ['./rover-photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class RoverPhotosComponent {
  @Input() data!: ManifestPhoto;

  constructor(
    private readonly router: Router
  ) {}

  viewMore(): void {
    this.router.navigate(['details']);
  }
}