import { AfterViewInit, Component, inject } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Observable, filter, map } from 'rxjs';

@Component({
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements AfterViewInit {
  private router = inject(Router);

  loading$!: Observable<boolean>;

  ngAfterViewInit() {
    this.loading$ = this.router.events.pipe(
      filter(
        (event) =>
          event instanceof NavigationStart || event instanceof NavigationEnd,
      ),
      map((event) => event instanceof NavigationStart),
    );
  }
}
