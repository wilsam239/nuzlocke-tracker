import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../common/BaseComponent';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends BaseComponent implements OnInit {
  title = 'Nuzlocke Tracker';
  regions:string[] = [
    'Kanto',
    'Johto',
    'Hoenn',
    'Sinnoh',
    'Unova',
    'Kalos',
    'Alola',
    'Galar'
  ]

  selectedRegion:string = 'Shorts!'


  constructor(_snackBar: MatSnackBar, _router:Router, _route:ActivatedRoute) {
    super(_snackBar, _router, _route)
  }
  ngOnInit(): void {

  }

  newNuzlocke(region:string) {
    if(this.regions.includes(region)) {
      this.goToNest('nuzlocke')
    } else {
      this.openSnack('That region is invalid!')
    }
  }

}
