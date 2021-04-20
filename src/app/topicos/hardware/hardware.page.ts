import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.page.html',
  styleUrls: ['./hardware.page.scss'],
})
export class HardwarePage implements OnInit {

  menuCollection : any[] = [];
  constructor(private navCtrl: NavController) { 

    this.menuCollection = [
    
      { title: 'Tela Azul', url: 'telaazul', icon: 'tv'},
      { title: 'Computador lento', url: 'computadorlento', icon: 'pulse' },
      { title: 'Computador nao liga', url: 'computadornaoliga', icon: 'power' },
      { title: 'Sistema não inicia', url: 'sistemaopnaoinicia', icon: 'play-circle' },
     
       ];
  }

  ngOnInit() {
  }

  showPage(url : string){
    this.navCtrl.navigateForward(url);
  }
}
