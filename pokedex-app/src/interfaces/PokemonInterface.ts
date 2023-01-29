export interface PokemonInterface {
  name:string
  image:string
  //types: string
  id:number
  weigth:number
  heigth:number
  baseExperience:number
}
  export interface Ability2 {
      name: string;
      url: string;
  }

  export interface Ability {
      ability: Ability2;
      is_hidden: boolean;
      slot: number;
  }

  export interface Form {
      name: string;
      url: string;
  }

  export interface Version {
      name: string;
      url: string;
  }

  export interface GameIndice {
      game_index: number;
      version: Version;
  }

  export interface Move2 {
      name: string;
      url: string;
  }
  export interface MoveLearnMethod {
      name: string;
      url: string;
  }
  export interface VersionGroup {
      name: string;
      url: string;
  }
  export interface VersionGroupDetail {
      level_learned_at: number;
      move_learn_method: MoveLearnMethod;
      version_group: VersionGroup;
  }
  export interface Move {
      move: Move2;
      version_group_details: VersionGroupDetail[];
  }
  export interface Species {
      name: string;
      url: string;
  }
  export interface Icons {
      front_default: string;
      front_female?: any;
  }
  export interface Sprites {
      back_default: string;
      back_female?: any;
      back_shiny: string;
      back_shiny_female?: any;
      front_default: string;
      front_female?: any;
      front_shiny: string;
      front_shiny_female?: any;
  }
  export interface StatInside {
      name: string;
      url: string;
  }

  export interface Stat {
      base_stat: number;
      effort: number;
      stat: StatInside;
  }
  export interface TypeInside {
      name: string;
      url: string;
  }
  export interface Type {
      slot: number;
      type: TypeInside;
  }
  export interface PokemonModel {
      abilities: Ability[];
      base_experience: number;
      forms: Form[];
      game_indices: GameIndice[];
      height: number;
      held_items: any[];
      id: number;
      is_default: boolean;
      location_area_encounters: string;
      moves: Move[];
      name: string;
      order: number;
      past_types: any[];
      species: Species;
      sprites: Sprites;
      stats: Stat[];
      types: Type[];
      weight: number;
  }
