import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.page.html',
  styleUrls: ['./redes.page.scss'],
})
export class RedesPage implements OnInit {

  menuCollection : any[] = [];
  
  constructor(  private navCtrl : NavController) { 
    this.menuCollection = [
    
      { title: 'Internet lenta', url: 'internetlenta', icon: 'wifi' },
      { title: 'Wifi não conecta', url: 'naoconecta', icon: 'radio' },
     
       ];

  }

  ngOnInit() {
  }

  showPage(url : string){
    this.navCtrl.navigateForward(url);
  }
}
