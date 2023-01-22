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
}
