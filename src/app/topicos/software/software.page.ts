import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-software',
  templateUrl: './software.page.html',
  styleUrls: ['./software.page.scss'],
})
export class SoftwarePage implements OnInit {

  menuCollection : any[] = [];

  constructor(  private navCtrl : NavController) {

    this.menuCollection = [
    
      { title: 'Programa não instala', url: 'programanaoinstala', icon: 'cog' },
      { title: 'Alto uso cpu', url: 'altousocpu', icon: 'hardware-chip' },
      { title: 'Data hora', url: 'configdatahora', icon: 'calendar' },
      { title: 'Queda quadros', url: 'quedaquadros', icon: 'desktop' },
      { title: 'Porta usb', url: 'portausb', icon: 'pint' },
     
       ];

   }

  ngOnInit() {
  }

  showPage(url : string){
    this.navCtrl.navigateForward(url);
  }
}
