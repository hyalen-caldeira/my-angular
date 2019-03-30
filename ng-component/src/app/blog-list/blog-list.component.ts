import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogPosts : BlogPost[] = [];

  constructor() { }

  ngOnInit() {
    // let blog1 = new BlogPost("Blog Title Example 1", "Blog Subtitle Example 1");
    // let blog2 = new BlogPost("Blog Title Example 2", "Blog Subtitle Example 2");
    this.blogPosts.push(new BlogPost("Blog Title Example 1", "Blog Subtitle Example 1", ""));
    this.blogPosts.push(new BlogPost("Blog Title Example 2", "Blog Subtitle Example 2", ""));
  }

}
