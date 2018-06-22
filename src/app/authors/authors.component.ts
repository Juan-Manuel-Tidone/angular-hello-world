import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title= "List of Authors";
  authors;
  totalAuthors;
  authorName = "Juan";
  visible = false;
  progLanguages = {
    'frontEnd': ['html', 'css'],
    'backEnd':['c#', 'nodejs']
  }

  hobbies = [
    {'name':'futbol', 'type':'sport'},
    {'name':'basket', 'type':'sport'},
    {'name':'natacion', 'type':'sport'},
    {'name':'paint', 'type':'artist'}
  ]

  counter = 0;
 constructor(authorsService: AuthorsService) {
    this.authors = authorsService.getAuthors();
   }
   
  toggleDiv()
  {
    this.visible = !this.visible;    
  }

  toggleDivCounter()
  {
    this.counter++;   
  }

  myFunction(event)
  {
    console.log(event)
  }


  ngOnInit() {
  }

}
