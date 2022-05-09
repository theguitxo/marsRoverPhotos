import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Rover } from "src/app/models/rovers";
import { getRoversList } from "src/app/store/app/app.selectors";
import { StoreState } from "src/app/store/app/app.state";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  roversList!: Observable<Rover[]>;

  constructor(
    private readonly store: Store<StoreState>
  ) {}

  ngOnInit(): void {
    this.roversList = this.store.select(getRoversList); 
  }
}
