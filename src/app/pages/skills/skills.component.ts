import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = [
    {
      language: 'Javascript',
      percentage: 90
    }
  ];
  constructor() {}

  ngOnInit() {}
}
