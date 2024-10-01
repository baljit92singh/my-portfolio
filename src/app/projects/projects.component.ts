import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Example usage
    this.route.params.subscribe(params => {
      // Do something with the route parameters
    });
  }
  
  projects = [
    { title: 'Project 1', description: 'Description of project 1', link: 'https://example.com' },
    { title: 'Project 2', description: 'Description of project 2', link: 'https://example.com' },
    // Add more projects
  ];
}
