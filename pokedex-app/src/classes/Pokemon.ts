import { PokemonInterface } from '../interfaces/PokemonInterface';
export class Pokemon implements PokemonInterface{
  name:string
  image:string
  //types: string
  id:number
  weigth:number
  heigth:number
  baseExperience:number

  constructor(){
    this.name =""
    this.image = ""
    //this.type =""
    this.id = 0
    this.weigth = 0
    this.heigth = 0
    this.baseExperience = 0
  }
}
