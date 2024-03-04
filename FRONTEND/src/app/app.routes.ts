import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';


export const routes: Routes = [
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'body', component: BodyComponent },
  { path: 'recapitulatif', component: RecapitulatifComponent },
  { path: '', redirectTo: '/catalogue', pathMatch: 'full' },
];
