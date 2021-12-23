import { Character } from "./character";
import { BaadBillyGruff } from "./characters/baadBillyGruff";

/**
 * Player Class
 *
 * @class Player
 */
export class Player {
  constructor() {

  }

  board: [Character?, Character?, Character?, Character?, Character?, Character?, Character?] = [new BaadBillyGruff(), undefined, undefined, undefined, undefined, undefined, undefined]
}
