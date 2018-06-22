import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors/authors.service';
import { HeaderComponent } from './header/header.component';
import { BlueColoredDirective } from './blue-colored.directive';
import {StudentsModule} from './students/students.module'
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubdashboardComponent } from './subdashboard/subdashboard.component'

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent,
  children: [
    {path: 'subdash', component: SubdashboardComponent}
  ] 
}
  
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    HeaderComponent,
    BlueColoredDirective,
    DashboardComponent,
    SubdashboardComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [
    CourseService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
