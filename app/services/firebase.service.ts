import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { getStorage, ref, listAll } from "firebase/storage";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}
 getCours(){
  return this.db.collection('cours').valueChanges({ idField: 'id' });
 }
 getCoursCat(pos:any){
  return this.db.collection('cours', ref => ref.orderBy('num').startAt(pos).limit(4)).valueChanges({ idField: 'id' });
 }
 getCoursChapitre(chapitre:string){
  return this.db.collection('cours',ref=>ref.where("num",'==',+chapitre)).valueChanges();
 }
  getCoursPre(num:number){
    return this.db.collection('cours',ref =>ref.where("num",'==',num)).valueChanges();
  }
  addCours(cours:any){
    return this.db.collection("cours").add(cours);
  }
}
