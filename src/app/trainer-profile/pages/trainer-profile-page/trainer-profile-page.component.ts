import { Component } from '@angular/core';

@Component({
  templateUrl: './trainer-profile-page.component.html',
  styleUrls: ['./trainer-profile-page.component.scss'],
})
export class TrainerProfilePageComponent {
  trainerProfileImage = '';

  onLoadImage(imageURL: string) {
    this.trainerProfileImage = imageURL;
  }
}
