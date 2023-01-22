import { PokemonService } from './../../services/pokemon.service';
import { Pokemon } from './../../classes/Pokemon';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pokemon-component',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() numPokemon!: number;
  pokemon: Pokemon = new Pokemon;
  pokemonObject:any
  constructor(private pokemonService:PokemonService) { }
  ngOnInit() {
    this.pokemonService.getPokemonData(6).subscribe(
      (res) => {
          this.pokemonObject = res
          /* res['image'] = res.image
          res['type'] = res.type
          res['id'] = res.id
          res['weigth'] = res.weigth
          res['heigth'] = res.heigth
          res['baseExperience'] = res.baseExperience */

        }

    )
  }
  toUpperCase(word:string){
    return this.pokemonService.toUpperCase(word)
  }
  generateIcon(type:string){
    return this.pokemonService.generateIcon(type)
  }

}
