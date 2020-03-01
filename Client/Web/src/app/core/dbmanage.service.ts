import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Users, ActReact } from '../Model/users.model';
@Injectable({
  providedIn: 'root'
})
export class DBManageService {

  constructor(private firestore: AngularFirestore, public DB: AngularFireDatabase) { }

  getPolicies(id: any) {
    return this.DB.database.ref('/users/' + id).once('value');
  }

  createPolicy(act: Users) {

    var newPostKey = this.DB.database.ref().child('users').push().key;
    var updates = {};

    updates['/users/' + act.id] = act;

    return this.DB.database.ref().update(updates);
  }

  createAct(act: ActReact) {

    var newPostKey = this.DB.database.ref().child('users').push().key;
    var updates = {};

    updates['/actreact/' + act.id] = act;

    return this.DB.database.ref().update(updates);
  }

  updatePolicy(users: Users) {
    delete users.id;
    this.firestore.doc('users/' + users.id).update(users);
  }

  deleteact(act: ActReact) {
    var newPostKey = this.DB.database.ref().child('users').push().key;
    var updates = {};

    updates['/actreact/' + act.id] = null;

    return this.DB.database.ref().update(updates);
  }



}
