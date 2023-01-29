import { PokemonService } from './../../services/pokemon.service';
import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'pokemon-component',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() numPokemon!: number;
  pokemonObject:any
  pokemonApiContent:Observable<any> | undefined

  constructor(private pokemonService:PokemonService) { }
  ngOnInit() {
    this.pokemonApiContent = this.pokemonService.getPokemonData(9).pipe(
      map((res) =>res))
  }
  toUpperCase(word:string){
    return this.pokemonService.toUpperCase(word)
  }
  generateIcon(type:string){
    return this.pokemonService.generateIcon(type)
  }
  generateImage(name:string):string{
    return this.pokemonService.generateImage(name)
  }
  findPokemon(id:number){
    this.pokemonService.getPokemonData(id).subscribe(
      (res) => {
          this.pokemonObject = res
          console.log(this.pokemonObject)
        }
    )
  }
}
