import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Observable, filter, map } from 'rxjs';
import { PokemonTrainerService } from 'src/app/core/services/pokemon-trainer.service';

@Component({
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements AfterViewInit, OnInit {
  private router = inject(Router);
  private pokemonTrainerService = inject(PokemonTrainerService);

  loading$!: Observable<boolean>;
  trainerName$!: Observable<string>;

  get currentUrl() {
    return this.router.url;
  }

  ngOnInit() {
    this.trainerName$ = this.pokemonTrainerService.profile$.pipe(
      map((profile) => (profile ? profile.name : '')),
    );
  }

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
