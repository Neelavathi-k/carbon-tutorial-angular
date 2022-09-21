import { Component, OnInit } from '@angular/core';
import { IconService } from 'carbon-components-angular';
import { HostBinding } from '@angular/core';

import Notification20 from '@carbon/icons/es/notification/20';
import UserAvatar20 from '@carbon/icons/es/user--avatar/20';
// import AppSwitcher20 from '@carbon/icons/es/app-switcher/20';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})


export class HeaderComponent implements OnInit {
  
  @HostBinding('class.cds--header') headerClass = true;

  constructor(private iconService: IconService) { }

  ngOnInit(): void {
    this.iconService.registerAll([Notification20, UserAvatar20])
  }

}
