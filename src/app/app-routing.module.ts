import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'telaazul',
    loadChildren: () => import('./pages/telaazul/telaazul.module').then( m => m.TelaazulPageModule)
  },
  {
    path: 'computadorlento',
    loadChildren: () => import('./pages/computadorlento/computadorlento.module').then( m => m.ComputadorlentoPageModule)
  },
  {
    path: 'computadornaoliga',
    loadChildren: () => import('./pages/computadornaoliga/computadornaoliga.module').then( m => m.ComputadornaoligaPageModule)
  },
  {
    path: 'esqueceuasenha',
    loadChildren: () => import('./pages/esqueceuasenha/esqueceuasenha.module').then( m => m.EsqueceuasenhaPageModule)
  },
  {
    path: 'programanaoinstala',
    loadChildren: () => import('./pages/programanaoinstala/programanaoinstala.module').then( m => m.ProgramanaoinstalaPageModule)
  },
  {
    path: 'internetlenta',
    loadChildren: () => import('./pages/internetlenta/internetlenta.module').then( m => m.InternetlentaPageModule)
  },
  {
    path: 'configdatahora',
    loadChildren: () => import('./pages/configdatahora/configdatahora.module').then( m => m.ConfigdatahoraPageModule)
  },
  {
    path: 'sistemaopnaoinicia',
    loadChildren: () => import('./pages/sistemaopnaoinicia/sistemaopnaoinicia.module').then( m => m.SistemaopnaoiniciaPageModule)
  },
  {
    path: 'altousocpu',
    loadChildren: () => import('./pages/altousocpu/altousocpu.module').then( m => m.AltousocpuPageModule)
  },
  {
    path: 'portausb',
    loadChildren: () => import('./pages/portausb/portausb.module').then( m => m.PortausbPageModule)
  },
  {
    path: 'quedaquadros',
    loadChildren: () => import('./pages/quedaquadros/quedaquadros.module').then( m => m.QuedaquadrosPageModule)
  },
  {
    path: 'naoconecta',
    loadChildren: () => import('./pages/naoconecta/naoconecta.module').then( m => m.NaoconectaPageModule)
  },
  {
    path: 'hardware',
    loadChildren: () => import('./topicos/hardware/hardware.module').then( m => m.HardwarePageModule)
  },
  {
    path: 'software',
    loadChildren: () => import('./topicos/software/software.module').then( m => m.SoftwarePageModule)
  },
  {
    path: 'redes',
    loadChildren: () => import('./topicos/redes/redes.module').then( m => m.RedesPageModule)
  },
  {
    path: 'pesquisa',
    loadChildren: () => import('./pesquisa/pesquisa.module').then( m => m.PesquisaPageModule)
  },
  {
    path: 'ticket-novo',
    loadChildren: () => import('./topicos/ticket-novo/ticket-novo.module').then( m => m.TicketNovoPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
