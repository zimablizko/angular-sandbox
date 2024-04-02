import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SandService implements OnInit {
  constructor() {
    console.log('SandService ngOnInit');
  }

  ping = () => {
    console.log('ping');
  };

  ngOnInit(): void {
    console.log('SandService ngOnInit');
  }
}
