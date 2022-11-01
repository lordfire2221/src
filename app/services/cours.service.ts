import { Injectable } from '@angular/core';

export interface cours{
 type:string;
 Titre:string;
 paragraphe:string;
}

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  public Cours: cours[]=[
  {
    type:'permis',
    Titre:'Les diverses catégories de permis ',
    paragraphe:"Le Permis A  Le permis A est divisé en trois groupes:lepermis A1 ,le permis A2 et le permis A3.    Le permis A1 Accessible dès 16 ans, le permis A1 permet, après obtention, de conduire des motocyclettes dont la cylindrée maximum est de 125cm3    Le permis A2  Le permis A2, accessible dès l'âge de 18 ans, permet aux usagers de la route qui l'obtiennent d'être autorisés à conduire des véhicules dont la puissance maximale sera de 47 chevaux (ou 35 kW).     Le permisA3:"   
  },
  {
    type:'permis',
    Titre:'Les diverses catégories de permis ',
    paragraphe:''
  }
  ];

  constructor() { }
}
