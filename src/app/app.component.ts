import { Component } from '@angular/core';
import { NewsApiService } from './services/news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-app';

  mArticles: Array<any>;
  mSources: Array<any>;

  constructor(private newsapi: NewsApiService) {
    console.log('app component constructor called');
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    // load articles
    // tslint:disable-next-line:no-string-literal
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    // load news sources
    // tslint:disable-next-line:no-string-literal
    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
  }

  searchArticles(source) {
    console.log('selected source is: ' + source);
    // tslint:disable-next-line:no-string-literal
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }
}
