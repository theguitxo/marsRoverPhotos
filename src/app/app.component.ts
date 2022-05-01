import { Component, OnInit } from '@angular/core';
import camerasList from '../assets/info/cameras.list.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(camerasList);
  }
}
