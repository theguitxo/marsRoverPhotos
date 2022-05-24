import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(
    private readonly router: Router
  ){}

  ngOnInit(): void {
    console.log('hola');
  }

  goToDashboard(): void {
    this.router.navigate(['dashboard']);
  }
}
