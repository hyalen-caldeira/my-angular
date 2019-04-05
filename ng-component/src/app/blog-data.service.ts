import { Injectable } from '@angular/core';
import { BlogPostTileComponent } from './blog-post-tile/blog-post-tile.component';
import { BlogPost } from './blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() { }

  getData() : BlogPost[] {
    return [
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
  }
}
