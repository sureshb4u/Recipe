import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  showHeroes = true;
  showAddRecipe = false;
  showDownloader = true;
  showUploader = true;
  showSearch = true;

  toggleHeroes() { this.showHeroes = !this.showHeroes; }
  add(){this.showAddRecipe = true;this.showHeroes = false;}
 }
