import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mc-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.scss'],
})
export class NavBarComponent implements OnInit {
  nickname: string = 'Danelya Mukash';
  @Input('admin') adminProps: boolean = false;

  admin: boolean = false;
  searchInput: string;

  constructor(private router: Router, private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.nickname = localStorage.getItem('name') || 'Danelya Mukash';

    if (this.nickname === 'admin@gmail.com') {
      this.admin = true;
    }
    this.searchInput = this.activateRoute.snapshot.queryParams['search'];
  }

  logOut(): void {
    localStorage.removeItem('name');
  }

  navigateToSearch() {
    // console.log(this.activateRoute.snapshot.queryParams['search']);

    // if (this.activateRoute.snapshot.queryParams['search']) {
    //   const queryParams = { ...this.activateRoute.snapshot.queryParams };
    //   queryParams['search'] = this.searchInput;
    // } else {
    const queryParams = { search: this.searchInput };
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
      relativeTo: this.activateRoute,
    });
    if (this.searchInput === '') {
      this.router.navigate(['/home']);
    }
    // }
  }
}
