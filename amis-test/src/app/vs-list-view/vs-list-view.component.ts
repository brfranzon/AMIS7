import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'vs-list-view',
  templateUrl: './vs-list-view.component.html',
  styleUrls: ['./vs-list-view.component.css']
})
export class VsListViewComponent implements OnInit {

  showTableList: boolean = true;
  buttonFlag: boolean = true;
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void { }
 

}
