import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Pokemon } from 'src/app/core/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-viewer',
  templateUrl: './pokemon-viewer.component.html',
  styleUrls: ['./pokemon-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonViewerComponent {
  @Input() pokemons!: Pokemon[];

  private swipeCoord?: [number, number];
  private swipeTime?: number;
  swipe(event: TouchEvent, when: string, carousel: NgbCarousel) {
    const coord: [number, number] = [
      event.changedTouches[0].pageX,
      event.changedTouches[0].pageY,
    ];
    const time = new Date().getTime();
    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end' && this.swipeCoord && this.swipeTime) {
      const direction = [
        coord[0] - this.swipeCoord[0],
        coord[1] - this.swipeCoord[1],
      ];
      const duration = time - this.swipeTime;
      if (
        duration < 1000 &&
        Math.abs(direction[0]) > 30 &&
        Math.abs(direction[0]) > Math.abs(direction[1] * 3)
      ) {
        if (direction[0] < 0) {
          carousel.next();
        } else {
          carousel.prev();
        }
      }
    }
  }
}
