import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(public dataService: DataService) {}

  login() {
    this.dataService.isLoggedIn = true;
  }

  logout() {
    this.dataService.isLoggedIn = false;
  }
}
