import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
  // encapsulation : ViewEncapsulation.None
})
export class BlogPostTileComponent implements OnInit {
  // @Input() title : string;
  // @Input() subtitle : string;
  @Input() post : BlogPost;
  private fullSummary : string;
  
  constructor(private truncatePipe : TruncatePipe) { }

  ngOnInit() {
    // this.title = "Blog Title Example"
    // this.subtitle = "Blog Subtitle Example"

    this.fullSummary = this.post.summary;
    // The foloowing line can also be called into HTML: {{post.summary | truncate:[30]}}
    this.post.summary = this.truncatePipe.transform(this.post.summary, [60, ' ...']);
  }

  showFullSummary() {
    this.post.summary = this.fullSummary;
  }

  toggleFavorite() {
    this.post.favorite = !this.post.favorite;
  }
}