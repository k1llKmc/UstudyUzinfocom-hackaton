import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Courses, Events } from './../../app.data';
import { Course, Event } from './../../app.interface';
import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { WhyComponent } from '../../components/why/why.component';
import { CoursesComponent } from '../../components/courses/courses.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgFor,
    NgIf,
    AboutComponent,
    WhyComponent,
    CoursesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  courses: Course[] = Courses;
  events: Event[] = Events;
}
