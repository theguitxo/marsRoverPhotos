import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['details.component.scss']
})
export class DetailsComponent {
  constructor(
    private readonly router: Router
  ){}

  goToDashboard(): void {
    this.router.navigate(['dashboard']);
  }
}
