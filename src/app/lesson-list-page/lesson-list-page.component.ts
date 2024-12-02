import { Component, OnInit } from '@angular/core';
import { UserSettingsService } from '../user-settings.service';

@Component({
  selector: 'app-lesson-list-page',
  standalone: true,
  imports: [],
  templateUrl: './lesson-list-page.component.html',
  styleUrl: './lesson-list-page.component.css'
})

export class LessonListPageComponent implements OnInit {

  constructor(private userSettingsService: UserSettingsService) {}

  ngOnInit() {
    console.log("get lastLessonId:", this.userSettingsService.lastLessonId);
  }
}

