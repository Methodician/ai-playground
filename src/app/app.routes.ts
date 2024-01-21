import { Routes } from '@angular/router';
import { HomeComponent } from '@components/home/home.component';
import { GuideComponent } from '@components/guide/guide.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'guide', component: GuideComponent },
];
