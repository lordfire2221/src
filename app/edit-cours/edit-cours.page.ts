import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-edit-cours',
  templateUrl: './edit-cours.page.html',
  styleUrls: ['./edit-cours.page.scss'],
})
export class EditCoursPage implements OnInit {
  public cours : any[]=[
   
    {
      num:1,
      sous_chapitre:[
        {
          titre:"Les différentes catégories de permis de conduire",
          paragraphes:[
            {
              image:"",
              titre:"Le permis A1",
              contenu:"C'est une attestation qui nous autorise à conduire les engins à deux roues dont la masse cylindrique ne dépasse 75cntimètre cube ,pour avoir ce permis il faut avoir 16ans."
            },
            {
              image:"",
              titre:"Le permis A2",
              contenu:"C'est une attestation qui nous autorise à conduire les engins à deux roues dont la masse cylindrique est supérieur à 75cntimètre cube jusqu'à 400 centimètre cube ,pour avoir ce permis il faut avoir 18ans."
            },
            {
              image:"",
              titre:"Le permis A3",
              contenu:"C'est une attestation qui nous autorise à conduire les engins à deux roues dont la masse cylindrique est supérieur à  400 centimètre cube ,pour avoir ce permis il faut avoir 21ans."
            },
            {
              image:"",
              titre:"Le permis B",
              contenu:"C'est une attestation qui nous autorise à conduire les véhicules affectés au transport de marchandises dont le poids total autorisé en charge(PTAC) ne dépasse pas 3,5tonnes .C'est aussi C'est une attestation qui nous autorise à conduire les véhicules affectés au transport en commun de personnes dont le nombre ne dépasse pas 09 y compris moi-même le conducteur (le chauffeur).Pour être détenteur de ce permis il faut avoir 18ans."
            },
            {
              image:"",
              titre:"Le permis C",
              contenu:"C'est une attestation qui nous autorise à conduire les véhicules affecté au transport de marchandises dont le poids total autorisé en charges dépasse 3,5 tonnes jusqu'à 18 tonnes. Pour avoir ce permis il faut obtenir le permis B d'abord et avoir au moins moins 21ans."
            },
            {
              image:"",
              titre:"Le permis C1",
              contenu:"C'est une attestation qui nous autorise à conduire les véhicules affecté au transport de marchandises dont le poids total autorisé en charges est supérieur à 18 tonnes. Pour avoir ce permis il faut obtenir le permis B d'abord et avoir au moins moins 21ans"
            },
            {
              image:"",
              titre:"Le permis Dr",
              contenu:"C'est une attestation qui nous autorise à conduire les véhicules affecté au transport en commun de personnes dont le nombre dépasse 09 jusqu'à 20. Pour avoir ce permis il faut obtenir le permis B d'abord et avoir au moins moins 21ans"
            },
            {
              image:"",
              titre:"Le permis D",
              contenu:"C'est une attestation qui nous autorise à conduire les véhicules affecté au transport en commun de personnes dont le nombre dépasse 20 jusqu'à 50. Pour avoir ce permis il faut obtenir le permis B d'abord et avoir au moins moins 21ans"
            }, {
              image:"",
              titre:"Le permis E",
              contenu:"C'est une attestation qui nous autorise à conduire les tracteurs ,les véhicules agricole"
            }, {
              image:"",
              titre:"Le permis F",
              contenu:"C'est une attestation qui nous autorise à conduire les tree-cycles pour les handicapés physique ."
            },

          ]
        }
      ],
      titre:"Les diverses catégories de permis",
      description:"A l'auto-école ,il existe plusieurs catégories de permis.Nous avons le permis A qui est divisé en trois groupes:      -Le permis A1       -Le permis A2   -Le permis A3",
      image:""
    },
    {
      num:2,
      sous_chapitre:[
        {
          titre:"definition",
          paragraphes:[
            {
              image:"",
              titre:"La route",
              contenu:"C'est un passage à revêtement spécial ouvert à la circulation publique.Elle est comprend la chaussée , l'accotement ou trottoir ."
            },
            {
              image:"",
              titre:"La chaussée",
              contenu:"Elle est une partie de la route réservée pour la circulation des véhicules. Elle est composée de voies"
            },
            {
              image:"",
              titre:"La voie",
              contenu:"Elle est une partie de la chaussée ayant une largeur suffisante pour permettre la circulation d'un fil de véhicules."
            },
            {
              image:"",
              titre:"La bande cyclable",
              contenu:"C'est une partie de la chaussée réservée à la circulation des cycles et cyclomoteurs(hors agglomération)."
            },
            {
              image:"",
              titre:"La piste cyclable",
              contenu:"C'est une partie de l'accotement réservée à la circulation des cycles et cyclomoteurs(hors aggglomération)."
            },
            {
              image:"",
              titre:"L'accotement",
              contenu:"C'est une partie de la route bordant latéralement la chaussée.La circulation des véhicules y est interdite mais ils peuvent y stationner."
            },
            {
              image:"",
              titre:"Terre-plein central ou glissière de sécurité",
              contenu:"C'est une partie de la route qui sépare deux chaussées consécutives ."
            },
            {
              image:"",
              titre:"Le trottoir",
              contenu:"C'est un accotement aménagé pour la circulation des piétons et habituellemnt séparé de chaussée par une bordure relevée.Les véhicules ne doivent pas y stationnés."
            }

          ]
        },
        {
          titre:"Les différentes sortes de routes",
          paragraphes:[
            {
              image:"",
              titre:"Les routes secondaires",
              contenu:"Elles se retrouvent dans l'agglomération dont la vitesse est limitée à 50km/h"
            },
            {
              image:"",
              titre:"Les routes à grande circulation",
              contenu:"On les rencontre en hors agglomération dont la vitesse est limitée à 90km/h sauf indications contraires ."
            },
          ]
        },
        {
          titre:"Les diverse formes de routes",
          paragraphes:[
            {
              image:"",
              titre:"Les formes de routes",
              contenu:"Il existe plusieurs formes de routes : les routes en forme de T ,les routes en forme de X(multiplication) ,les routes en forme de +(plus),les routes en forme de Y(i grec) etc ...\n Dans toutes ses formes de route,nous avons plein d'autre ."
            },
            {
              image:"",
              titre:"La route de montagne",
              contenu:"Ce sont des routes à grande déclivité"
            },
            {
              image:"",
              titre:"Les routes pour automobiles",
              contenu:"Ce sont des routes composées de deux chaussées à sns unique séparées par unterre-plein central ou glissières de sécurité.La vitesse est limitée à 110km/h ou en fonction de la législation en vigueur dans le chaque pays ."
            },
            {
              image:"",
              titre:"L'autoroute",
              contenu:"Elle est une route composée de deux chaussées à sens unique séparée par un terre-pleiin central dont chaque chaussée comporte au minimun trois voies sans intersection d'une autre route.On pénètre sur l'autoroute par un bretelle d'accès prolongée par une voie d'accélération.La vitesse maximale est de 130km/h et la vitesse minimale est de 80km/h ou en fonction de la législation en vigueur dans chaque pays.On en sort par une bretelle de sortie,précédée d'une voie de décélération."
            },
            {
              image:"",
              titre:"NB",
              contenu:"Chaque chaussée est bordée d'une bande d'arrêt d'urgence qu'on ne peut utiliser qu'en cas de panne ou d'accident.Seuls les véhicules prioritaires en mission peuvent y circuler la dessus (SAMU ; Sapeur-pompier ; Police ; Gendarme ; Service de dépannage)."
            },
            

          ]
        }
      ],
      titre:"Route",
      description:"Lorsqu’ils circulent, tous les usagers se déplacent sur ce que le code de la route appelle une route, et ceci quel que soit leur moyen de locomotion. Mais le mot “route” est un terme générique ne permettant pas de détailler à lui seul certains éléments importants, comme les divers parties composant la chaussée. Or, il est important pour l’ensemble des conducteurs de connaître les différents éléments qu'ils sont tous amenés à croiser lorsqu'ils circulent sur une route.",
      image:""
    },
    {
      num:3,
      sous_chapitre:[
        {
          titre:"La signalisation lumineuse",
          paragraphes:[
            {
              image:"",
              titre:"La signalisation lumineuse",
              contenu:"C'est un ensemble de feux tricolores qu'on rencontre au intersections sur la chaussée. La couleur de ses feux tricolores est : vert, jaune ,rouge .Le feux vert nous autorise à ciruler , le jaune nous autorise à ralentir , le rouge nous autorise à marquer l'arrêt.L'odre d'allumage de ces feux est ;(vert-jaune-rouge) ou (rouge-vert-jaune)."
            },

          ]
        },
        {
          titre:"La signalisation des agents",
          paragraphes:[
            {
              image:"",
              titre:"La signalisation des agents",
              contenu:"C'est l'ensemble des policiers, des gendarmes que nous rencontrons sur la chaussée. C'est -à-dire qu'elle prime sur les autres signalisations car ce sont eux qui réglementent ou régularisent la circulation ."
            },

          ]
        },
        {
          titre:"La signalisation des agents",
          paragraphes:[
            {
              image:"",
              titre:"La signalisation des agents",
              contenu:"C'est l'ensemble des policiers, des gendarmes que nous rencontrons sur la chaussée. C'est -à-dire qu'elle prime sur les autres signalisations car ce sont eux qui réglementent ou régularisent la circulation ."
            },

          ]
        },
        {
          titre:"La signalisation des agents",
          paragraphes:[
            {
              image:"",
              titre:"La signalisation des agents",
              contenu:"C'est l'ensemble des policiers, des gendarmes que nous rencontrons sur la chaussée. C'est -à-dire qu'elle prime sur les autres signalisations car ce sont eux qui réglementent ou régularisent la circulation ."
            },

          ]
        },
        
        
      ],
      titre:"Les signalisations routières",
      description:"Le Code de la route est un ensemble de différentes signalisations permettant un circulation plus sûre et plus rapide.Il a pur but d'indiquer ou de rappeler aux usagers les différentes prescriptions routières.Il existe quatre(04) formes de signalisations routières :Lasignalisation lumineuse ,la signalisation des agent , la signalisation verticale , la signalisation horizontale",
      image:""
    },
  ]
  constructor(public firSer:FirebaseService) { }

  ngOnInit() {
  }

  add(cour:any){
    this.firSer.addCours(cour)
  }
}
