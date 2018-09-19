import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FilmeProvider } from '../../providers/filme/filme';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  filmes;
  pathImagens = 'https://image.tmdb.org/t/p/w500/';
  constructor(private navCtrl: NavController,
              private filmeProvider:FilmeProvider) {

  }
  ionViewDidLoad(){
    this.filmeProvider.listarUltimosFilmes()
    .subscribe(filmes => {
      this.filmes = filmes['results']
      console.log(this.filmes[0])
    })
  }

}
