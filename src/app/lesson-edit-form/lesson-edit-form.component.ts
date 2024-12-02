import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { UserSettingsService } from "../user-settings.service"; // Assurez-vous que le service est bien importé

@Component({
  selector: 'app-lesson-edit-form',
  standalone: true,
  imports: [RouterLink,NgbTooltipModule],
  templateUrl: './lesson-edit-form.component.html'
})


export class LessonEditFormComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private userSettingsService: UserSettingsService) { // Injection du service UserSettingsService
    console.log("LessonEditFormComponent.constructor()");
  }

  ngOnInit(): void {
    console.log("LessonEditFormComponent.ngOnInit()");
  }

  ngOnDestroy(): void {
    console.log("LessonEditFormComponent.ngOnDestroy()");
  }


  onClickSubmit(): void {
    this.userSettingsService.lastLessonId = 1234;  
    console.log("Setting lastLessonId to:", this.userSettingsService.lastLessonId);

    this.router.navigate(['/lesson-list']).then(res => {
      console.log("Navigated to lesson-list page");
    });
  }
}