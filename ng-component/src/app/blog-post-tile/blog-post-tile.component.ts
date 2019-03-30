import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {
  @Input() title : string;
  @Input() subtitle : string;

  constructor() { }

  ngOnInit() {
    // this.title = "Blog Title Example"
    // this.subtitle = "Blog Subtitle Example"
  }
}
