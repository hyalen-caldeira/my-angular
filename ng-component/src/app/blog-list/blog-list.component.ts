import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { BlogPost } from '../blog-post';
import { PageEvent } from '@angular/material';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  // blogPosts: BlogPost[] = [];
  blogPosts: BlogPost[];

  length : number = 50;
  pageSize : number = 2;
  pageSizeOptions : number[] = [5, 10, 25, 100];

  @ViewChildren('tile') blogPostTileComponents : QueryList<BlogPostTileComponent>;

  // pageEvent : PageEvent;
  pageEvent(event : PageEvent) {
    console.log("Estou aqui ...");
  }

  constructor(private blogData : BlogDataService) { }

  expandAll() {
    this.blogPostTileComponents.forEach(postTile => postTile.showFullSummary());
  }

  ngOnInit() {
    this.blogPosts = this.blogData.getData();
    /*  
      [
        {title : "Blog Title Example 1.1",
        subtitle: "Blog Subtitle Example 1.1",
        summary: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`},
        {title : "Blog Title Example 1.2",
        subtitle: "Blog Subtitle Example 1.2",
        summary: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`},
        {title : "Blog Title Example 1.3",
        subtitle: "Blog Subtitle Example 1.3",
        summary: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`},
        {title : "Blog Title Example 2.1",
        subtitle: "Blog Subtitle Example 2.1",
        summary: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`},
        {title : "Blog Title Example 2.2",
        subtitle: "Blog Subtitle Example 2.2",
        summary: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`},
        {title : "Blog Title Example 2.3",
        subtitle: "Blog Subtitle Example 2.3",
        summary: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`},
        {title : "Blog Title Example 3.1",
        subtitle: "Blog Subtitle Example 3,1",
        summary: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`},
        {title : "Blog Title Example 3.2",
        subtitle: "Blog Subtitle Example 3.2",
        summary: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`},
        {title : "Blog Title Example 4.1",
        subtitle: "Blog Subtitle Example 4.1",
        summary: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`},
        {title : "Blog Title Example 5.1",
        subtitle: "Blog Subtitle Example 5.1",
        summary: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`}
      ];
    */
    // this.blogPosts.push(
    //   new BlogPost(
    //     "Blog Title Example 1",
    //     "Blog Subtitle Example 1",
    //     `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    //      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    //      bred for hunting.`));
    // this.blogPosts.push(
    //   new BlogPost(
    //     "Blog Title Example 1",
    //     "Blog Subtitle Example 1",
    //     `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    //      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    //      bred for hunting.`));
  }

}
