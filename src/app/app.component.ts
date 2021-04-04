import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    firstMediaItem = {
        id: 1,
        name: 'Firefly',
        medium: 'Series',
        category: 'Science Fiction',
        year: 2010,
        watchedOn: 1245487523452,
        isFavorite: false
    };

    onMediaItemDelete(mediaItem) {}
}
