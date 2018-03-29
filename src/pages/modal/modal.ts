import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  //data;
  text=this.navParams.get('data');
  //me= this.navParams.get('data');
  //public params;
    //sunday = borring;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    console.log(navParams.get('data'))
    //this.data = navParams.get('data');
    //this.data=this.data.fullname;
    //fullname = this.navParams.get('data');
   // this.navParams.get('data');
   //sconsole.log(fullname);
   var d = navParams.get('data');
   console.log(d);
  }
  //params = navParams.get('data');
  public closeModal(){
    this.viewCtrl.dismiss();

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
    this.navParams.get('d');
    
    //this.params = this.navParams.get('data');

  }
  
}
