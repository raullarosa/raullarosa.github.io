"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Ultimate Pokedex';
        this.pokemons = POKEMONS;
    }
    AppComponent.prototype.onSelect = function (pokemon) { this.selectedPokemon = pokemon; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var Pokemon = (function () {
    function Pokemon() {
    }
    return Pokemon;
}());
exports.Pokemon = Pokemon;
var POKEMONS = [
    { id: 1, name: "Bulbasaur", type: "Grass, Poison" },
    { id: 2, name: "Ivysaur", type: "Grass, Poison" },
    { id: 3, name: "Venasaur", type: "Grass, Poison" },
    { id: 4, name: "Charmander", type: "Fire" },
    { id: 5, name: "Charmeleon", type: "Fire" },
    { id: 6, name: "Charizard", type: "Fire, Flying" },
    { id: 7, name: "Squirtle", type: "Water" },
    { id: 8, name: "Wartortle", type: "Water" },
    { id: 9, name: "Blastoise", type: "Water" },
];
//# sourceMappingURL=app.component.js.map