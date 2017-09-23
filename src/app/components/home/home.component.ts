import { Component, OnInit } from '@angular/core';
import { HomeDataService } from '../../services/home-data.service';
import { HomeColumn } from '../../interfaces/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public homeColumns: Array<HomeColumn>;

  constructor( homeDataService: HomeDataService ) {
    this.homeColumns = homeDataService.GetHomeColumns();
  }

  ngOnInit() {
  }

}
