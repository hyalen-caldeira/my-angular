import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  length : number = 50;
  pageSize : number = 2;
  pageSizeOptions : number[] = [5, 10, 25, 100];

  pageEvent : PageEvent;

  constructor() { }

  ngOnInit() {
  }

}
