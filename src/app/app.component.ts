import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Journal', url: '/journal', icon: 'mail' },
    // { title: 'Meals', url: '/meals', icon: 'mail' },
    // { title: 'Dishes', url: '/dishes', icon: 'mail' },
    // { title: 'Ingredients', url: '/ingredients', icon: 'mail' },
    // { title: 'Moods', url: '/moods', icon: 'mail' },
  ];

  constructor() {}
}
