import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Base Component used to share snackbar and other functions between our main components
 */
export class BaseComponent {
  loading: boolean = false;

  constructor(
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  /**
   * Opens a snackbar with the specified parameters
   * @param msg The message being shown
   * @param action The action being shown (default is 'Dismiss' if no parameter supplied)
   * @param conf The configuration being used (default is duration 5 seconds if no parameter supplied)
   */
  openSnack(
    msg: string,
    action: string = 'Dismiss',
    conf: MatSnackBarConfig = { duration: 5000 }
  ) {
    this._snackBar.open(msg, action, conf);
  }

  goTo(route: string) {
    this._router.navigate([route], {
      replaceUrl: true,
    });
  }

  goToNest(route: string) {
    this._router.navigate([route], { relativeTo: this._route });
  }
}
