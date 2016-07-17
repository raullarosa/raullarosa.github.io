import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html'
})
export class AppComponent {
    title = 'Ultimate Pokedex';
    public pokemons = POKEMONS;
    selectedPokemon: Pokemon;

    onSelect(pokemon: Pokemon) { this.selectedPokemon = pokemon; }
 }

 export class Pokemon {
     id: number;
     name: string;
     type: string;
 }

 const POKEMONS: Pokemon[] = [
     {id:1, name:"Bulbasaur", type:"Grass, Poison"},
     {id:2, name:"Ivysaur", type:"Grass, Poison"},
     {id:3, name:"Venasaur", type:"Grass, Poison"},
     {id:4, name:"Charmander", type:"Fire"},
     {id:5, name:"Charmeleon", type:"Fire"},
     {id:6, name:"Charizard", type:"Fire, Flying"},
     {id:7, name:"Squirtle", type:"Water"},
     {id:8, name:"Wartortle", type:"Water"},
     {id:9, name:"Blastoise", type:"Water"},
 ]