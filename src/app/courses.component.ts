import{Component} from '@angular/core'
import { CourseService } from './courses.service';

@Component({
    selector:'courses', //es un css selector. En este caso es <courses>
    template:`<h2>{{title}}</h2>
              <ul>
                <li *ngFor="let course of courses">
                    {{course}}
                </li>
              </ul>  
                `
})
export class CoursesComponent{
    title= "List of Courses";
    courses;
     
    constructor(service: CourseService){
        this.courses = service.getCourses();
    }

    getTitle(){
        return this.title
    }
}