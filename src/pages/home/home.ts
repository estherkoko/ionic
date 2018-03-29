import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fullname:any;
  constructor(public navCtrl: NavController, public modalCtrl:ModalController) {
   
  }
  presentModal() {
    //var data = {message : 'hello'};
    //fullName
    
    let data = {fullname:this.fullname};
    let modal = this.modalCtrl.create('ModalPage', {data:data});
   // let modal = this.modalCtrl.create('ModalPage', data);
  console.log("hi", data);
  modal.onDidDismiss((data)=>{
    //this.data=fullname;
    console.log("dismmisng me" + data);
  });
  modal.present();
  }
  
}
