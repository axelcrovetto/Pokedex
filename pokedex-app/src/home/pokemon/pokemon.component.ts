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
    this.pokemonService.getPokemonData(2).subscribe(
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
  fetchPokemon(numPokemon:number):Pokemon{


    return this.pokemon;
  }

}
