import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Users } from './model';

@Injectable({
  providedIn: 'root'
})

export class DbManageService {

    constructor(public DB: AngularFireDatabase)
    { }

    getDatas(id: any) {
        return this.DB.database.ref('/users/' + id).once('value');
    }

    createDatas(act: Users) {
        var newPostKey = this.DB.database.ref().child('users').push().key;
        var updates = {};

        updates['/users/' + act.id] = act;

        return this.DB.database.ref().update(updates);
    }
}