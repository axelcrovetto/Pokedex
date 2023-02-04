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
  @Input()idPokemon!: number;
  constructor(private pokemonService:PokemonService) { }
  ngOnInit() {
    /* this.pokemonApiContent = this.pokemonService.getPokemonData(6).pipe(
      map((res) =>res)) */
  }
  toUpperCase(word:string){
    return this.pokemonService.toUpperCase(word)
  }
  generateIcon(type:string){
    return this.pokemonService.generateIcon(type)
  }
  generateImageJPG(name:string){
    return this.pokemonService.generateImageJPG(name)
  }
 istruegenerateImageJPG(name:string):boolean{
  return this.pokemonService.isGenerateImageJPGAvailable(name)
 }
  generateImagePNG(name:string):string{
    return this.pokemonService.generateImagePNG(name)
  }
  generate3dImages(name:string):string{
    return this.pokemonService.generate3dImages(name)
  }
  generate3dImagesShiny(name:string){
    console.log("ciao")
    return this.pokemonService.generate3dImagesShiny(name)
  }
  generate3dGIFShiny(name:string):string{
    return this.pokemonService.generate3dGIFShiny(name)
  }
  generateImagesShiny(name:string){
    return this.pokemonService.generateImagesShiny(name)
  }
  generate3dImagesMore(name:string):string{
    return this.pokemonService.generate3dImagesMore(name)
  }
  findPokemon(id:number){
    this.pokemonService.getPokemonData(id).subscribe(
      (res) => {
          this.pokemonObject = res
          console.log(this.pokemonObject)
        }
    )
  }
  openPopup(){
    let popup = document.getElementById('popup')
    popup?.classList.add('open-popup')
  }
  closePopup(){
    let popup = document.getElementById('popup')
    popup?.classList.remove('open-popup')
  }
  getPokemonInfo(idPokemon:number){
    if(idPokemon && idPokemon > 0){
      this.pokemonApiContent = this.pokemonService.getPokemonData(this.idPokemon).pipe(
      map((res) =>res))
    }
    else if(idPokemon < 0){
      alert("Insert a number greater than zero!")
    }
    else this.pokemonApiContent = undefined
  }
}
