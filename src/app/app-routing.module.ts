import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';
import { NoteComponent } from './components/note/note.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { AboutProjectsComponent } from './components/about-projects/about-projects.component';
import { AboutSponsorComponent } from './components/about-sponsor/about-sponsor.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    title: 'Home page',
    component: HomeComponent,
  },
  {
    title: 'Notes Page',
    path: 'notes',
    component: NotesComponent,
  },
  {
    path: 'notes/:id',
    component: NoteComponent,
  },
  {
    path: 'about',
    title: 'About',
    component: AboutComponent,
    children: [
      {
        path: 'projects',
        title: 'Projects',
        component: AboutProjectsComponent,
      },
      {
        path: 'sponsor',
        title: 'Sponsor',
        component: AboutSponsorComponent,
      },
    ],
  },
  {
    path: '**',
    title: '404 - Page Not Found',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      bindToComponentInputs: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
