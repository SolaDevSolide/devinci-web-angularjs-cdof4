import { Injectable } from '@angular/core';

// Interface pour décrire les informations stockées dans localStorage
export interface StoredInfo {
  lastLessonId?: number | null;
}

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {

  // Champ privé avec un underscore
  private _lastLessonId: number | null = null;

  // Clé utilisée pour stocker la valeur dans localStorage
  public static STORAGE_KEY = 'lesson-app:lastSessionId';  // Déclaré comme public et static

  // Méthode getter
  get lastLessonId(): number | null {
    return this._lastLessonId;
  }

  // Méthode setter
  set lastLessonId(p: number | null) {
    this._lastLessonId = p;
    this.saveInfoToLocalStorage();  // Sauvegarder dans localStorage chaque fois qu'on change la valeur
  }

  // Méthode pour charger les informations depuis localStorage
  loadInfoFromLocalStorage(): StoredInfo {
    const storedJson = window.localStorage.getItem(UserSettingsService.STORAGE_KEY);  // Utilisation correcte de la constante
    let res: StoredInfo = storedJson ? JSON.parse(storedJson) : { lastLessonId: null };  // Parse le JSON ou retourne un objet par défaut
    console.log('Reading localStorage item ' + UserSettingsService.STORAGE_KEY, res);
    return res;
  }

  // Méthode pour sauvegarder les informations dans localStorage
  saveInfoToLocalStorage(): void {
    const info: StoredInfo = { lastLessonId: this._lastLessonId };  // Crée un objet à enregistrer
    const json = JSON.stringify(info);  // Convertit l'objet en JSON
    console.log('Writing localStorage item ' + UserSettingsService.STORAGE_KEY, info);
    window.localStorage.setItem(UserSettingsService.STORAGE_KEY, json);  // Sauvegarde dans localStorage
  }

  // Constructeur : on charge les données du localStorage dès l'instanciation du service
  constructor() {
    const storedInfo = this.loadInfoFromLocalStorage();  // Charge les informations depuis localStorage
    this._lastLessonId = storedInfo.lastLessonId || null;  // Assigne la valeur ou null si non défini
  }
}
