import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.page.html',
  styleUrls: ['./pesquisa.page.scss'],
})
export class PesquisaPage implements OnInit {

 title: string ='';
 listapesquisa: any[] = [];
 pesquisafeita:any;

  constructor() { 
    this.listapesquisa = [
    
      { title: 'Internet lenta', url: 'internetlenta', icon: 'wifi' },
      { title: 'Wifi não conecta', url: 'naoconecta', icon: 'radio' },
     
       ];
       this.pesquisafeita = this.listapesquisa
  }

  ngOnInit() {
  }

}
