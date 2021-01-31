import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationComponent } from './location/location.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule, Routes } from '@angular/router';
import { NuzlockeComponent } from './nuzlocke/nuzlocke.component';
import { ForeohforeComponent } from './foreohfore/foreohfore.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: '/v1', pathMatch: 'full'},
  { path: 'v1', component: MainComponent },
  { path: 'v1/nuzlocke', component: NuzlockeComponent },
  // 404
  { path: '**', component: ForeohforeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    NuzlockeComponent,
    MainComponent,
  ],
  imports: [
    /** Angular Modules */
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),

    /** Material Design Modules */
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
