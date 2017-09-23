import { Component, OnInit } from '@angular/core';
import { LinksDataService } from '../../services/links-data.service';
import { Link } from '../../interfaces/links';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  public links: Array<Link>;

  constructor( linksDataService: LinksDataService ) {
    this.links = linksDataService.GetLinks();
    console.log(this.links);
  }

  ngOnInit() {
  }

}
