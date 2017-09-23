import { Injectable } from '@angular/core';
import { HomeColumn } from '../interfaces/home';

@Injectable()
export class HomeDataService {
  HomeColumns: Array<HomeColumn>;

  constructor() { }

  public GetHomeColumns() {
    this.HomeColumns = this.homeColumns;
    return this.HomeColumns;
  }

  private homeColumns = [
    {
      heading: 'Heading',
      body: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
      url: '',
    },
    {
      heading: 'Heading',
      body: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
      url: '',
    },
    {
      heading: 'Heading',
      body: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
      url: '',
    }
  ];
}
