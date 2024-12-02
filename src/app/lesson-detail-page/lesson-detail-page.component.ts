import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-lesson-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './lesson-detail-page.component.html',
  styleUrl: './lesson-detail-page.component.css'
})

export class LessonDetailPageComponent{

  readonly initialId: number;
  id: number | undefined;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    // Récupérer l'ID initial à partir de l'URL (snapshot)
    this.initialId = +activatedRoute.snapshot.params['id'];  // Utilisation de snapshot pour obtenir la valeur à l'initialisation
    console.log('initialId:', this.initialId);

    // S'abonner aux changements de paramètres dans l'URL
    activatedRoute.params.subscribe(currParams => {
      this.id = +currParams['id'];  // Mise à jour dynamique de l'ID si l'URL change
      console.log('id:', this.id);  // Afficher l'ID dans la console
    });
  }

  onClickGoNextPage(){
    const nextId = (this.id)? this.id + 1 : 1;
    this.router.navigate(['/lesson', nextId]);
   }

}


 