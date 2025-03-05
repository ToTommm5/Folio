import { Routes } from '@angular/router';
import { CVPageComponent } from './components/pages/cv-page/cv-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProjetsComponent } from './components/pages/projets/projets.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'CV', component: CVPageComponent },
  { path: 'Projets', component: ProjetsComponent },
];
