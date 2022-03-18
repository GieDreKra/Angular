import Sprite from "./sprite.model";
import Types from "./types.model";

export default interface Pokemon {
    id:number,
    name:string,
    weight:number,
    sprites:Sprite,
    types:Types[]
}
