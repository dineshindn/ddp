import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-auth',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor( private titleService: Title) {
    var title = 'DDB Jira | ' + 'Auth';
    this.titleService.setTitle(title);
   }

  ngOnInit(): void {
  }

}
