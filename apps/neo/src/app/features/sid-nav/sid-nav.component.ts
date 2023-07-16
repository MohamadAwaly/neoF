import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sid-nav',
  templateUrl: './sid-nav.component.html',
  styleUrls: ['./sid-nav.component.scss'],
})
export class SidNavComponent implements OnInit {
  public opened: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
