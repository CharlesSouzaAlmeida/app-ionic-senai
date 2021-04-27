import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
  /*   { title: 'Inicio', url: 'inicio', icon: 'mail' },
    { title: 'Tela Azul', url: 'telaazul', icon: 'tv'},
    { title: 'Computador lento', url: 'computadorlento', icon: 'pulse' },
    { title: 'Computador nao liga', url: 'computadornaoliga', icon: 'power' },
    { title: 'Esqueceu a senha', url: 'esqueceuasenha', icon: 'key' },
    { title: 'Programa não instala', url: 'programanaoinstala', icon: 'cog' },
    { title: 'Internet lenta', url: 'internetlenta', icon: 'wifi' },
    { title: 'Data hora', url: 'configdatahora', icon: 'calendar' },
    { title: 'Sistema não inicia', url: 'sistemaopnaoinicia', icon: 'play-circle' },
    { title: 'Alto uso cpu', url: 'altousocpu', icon: 'hardware-chip' },
    { title: 'Porta usb', url: 'portausb', icon: 'pint' },
    { title: 'Queda quadros', url: 'quedaquadros', icon: 'desktop' },
    { title: 'Wifi não conecta', url: 'naoconecta', icon: 'radio' }, */
    { title: ' Fazer uma Pesquisa', url: 'pesquisa', icon: 'search-circle' },
    { title: 'Problemas de Hardware', url: 'hardware', icon: 'hardware-chip' },
    { title: 'Problemas de Software', url: 'software', icon: 'layers' },
    { title: 'Problemas de Redes', url: 'redes', icon: 'wifi' },
    { title: 'Cadastrar novo problemas', url: 'ticket-novo', icon: 'alert-circle' },
  ];
 /*  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders']; */
  constructor() {}
}
