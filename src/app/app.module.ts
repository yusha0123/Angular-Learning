import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './components/notes/notes.component';
import { NoteComponent } from './components/note/note.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { AboutSponsorComponent } from './components/about-sponsor/about-sponsor.component';
import { AboutProjectsComponent } from './components/about-projects/about-projects.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, NotesComponent, NoteComponent, NotFoundComponent, AboutComponent, AboutSponsorComponent, AboutProjectsComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
