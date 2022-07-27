import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { LandingComponent } from './landing/landing.component';
// import { NotFoundComponent } from './not-found/not-found.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { WhyimrcfyComponent } from './whyimrcfy/whyimrcfy.component';

const routes: Routes = [
  {
    path: '', component:LandingComponent
  },
  {
    path: 'land', component: LandingComponent
  },
  {
    path: 'why', component: WhyimrcfyComponent
  },
  {
    path: 'feat', component: FeaturesComponent
  },
  {
    path: 'solut', component: SolutionsComponent
  },
  // {
  //   path: '**', component: NotFoundComponent
  // },



];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
