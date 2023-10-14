import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TrainerProfile } from '../interfaces/trainer-profile';

@Injectable({
  providedIn: 'root',
})
export class PokemonTrainerService {
  private profileSubject = new BehaviorSubject<TrainerProfile | null>(null);

  get profile$() {
    return this.profileSubject.asObservable();
  }

  set profile({ image, ...profile }: TrainerProfile) {
    this.profileSubject.next({ ...profile, image });
  }
}
