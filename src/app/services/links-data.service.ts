import { Injectable } from '@angular/core';
import { Link } from '../interfaces/links';

@Injectable()
export class LinksDataService {
  Links: Array<Link>;

  constructor() { }
  
    public GetLinks() {
      this.Links = this.links;
      return this.Links;
    }
  
    private links = [
      {
        title: 'Link 1',
        url: '',
      },
      {
        title: 'Link 1',
        url: '',
      },
      {
        title: 'Link 1',
        url: '',
      }
    ];

}
