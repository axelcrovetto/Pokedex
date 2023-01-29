import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  constructor(private http:HttpClient) { }

  getPokemonData(id:number){
    let idPokemon= String(id)
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
  }
  toUpperCase(word:string):string{
    return word[0].toUpperCase()+word.substring(1);
  }
  generateIcon(word:string){
    return "col-10 type-icon type-"+word;
  }

  generateImageJPG(name:string){
    return `https://img.pokemondb.net/artwork/large/${name}.jpg`
  }
  generateImageJPGHTTP(name:string){
    return this.http.get(`https://img.pokemondb.net/artwork/large/${name}.jpg`)
  }
  isGenerateImageJPGAvailable(name:string){
    let response = this.generateImageJPGHTTP(name);
    response.subscribe(
      name => name,
      error => name == undefined);
      return name === undefined ? false:true
  }
  generateImagePNG(name:string){
    return `https://img.pokemondb.net/artwork/vector/large/${name}.png`
  }
  generateImagePNGHTTP(name:string){
    return this.http.get(`https://img.pokemondb.net/artwork/vector/large/${name}.png`)
  }
  generate3dImages(name:string){
    return `https://projectpokemon.org/images/normal-sprite/${name}.gif`
  }
  generate3dGIFShiny(name:string){
    return `https://projectpokemon.org/images/shiny-sprite/${name}.gif`
  }
  generateImagesShiny(name:string){
    return `https://img.pokemondb.net/sprites/x-y/shiny/${name}.png`
  }
  generate3dImagesShiny(name:string){
    return `https://img.pokemondb.net/sprites/home/shiny/${name}.png`
  }
  generate3dImagesMore(name:string){
    return `https://img.pokemondb.net/sprites/home/normal/2x/avif/${name}.avif`
  }
  //TO-DO find a why to obtain all pokemon without for cicle
  fetchKantoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1008')
    .then(response => response.json())
    .then(allpokemon => console.log(allpokemon))
  }


}
