import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppComponent } from './home/app.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';

const appRoutes: Routes = [
  {
    path:'',
    redirectTo: '/about-me',
    pathMatch: 'full'
  },
  {
    path:'hobbies',
    component: HobbiesComponent
  },

  {
    path:"about-me",
    component: AboutMeComponent
  },

  {
    path:"experience",
    component: ExperienceComponent
  },
  
];
@NgModule({
  declarations: [
    AppComponent,
    HobbiesComponent,
    AboutMeComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( appRoutes ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router) {

  }
}
