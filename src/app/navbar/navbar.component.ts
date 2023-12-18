import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  logo: string = 'assets/images/shopping.png';
  logo1: string = 'assets/images/shopping-bag.png';
  avtar: string = 'assets/images/avatar.png';


  openNavbarContent(menu:any){

  }
  navigateTo(path: any){

  }
}
