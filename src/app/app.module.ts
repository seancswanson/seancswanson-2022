import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BioComponent } from './main-content/bio/bio.component';
import { CurriculumVitaeComponent } from './main-content/curriculum-vitae/curriculum-vitae.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ProjectsComponent } from './main-content/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainContentComponent,
    BioComponent,
    CurriculumVitaeComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
