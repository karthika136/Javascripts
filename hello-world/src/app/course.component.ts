import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
    selector: 'course',
    template:`<h1>
       {{ "Title:" + getTitle() }}
        <ul>
            <li *ngFor= "let course of courses">{{ course }}</li>
        </ul>
    </h1>`
})

export class CourseComponent
{
   title = "List of Courses";
   courses;

   //Dependency Injection 
   constructor(service: CourseService){
       this.courses = service.getCourses();
       console.log(this.courses);
   }
   

   //method
  /* getTitle()
   {
       return this.title;

   }*/
}