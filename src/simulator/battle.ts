import { Player } from "./player";
import { Queue } from "./queue";
import Copy from "./util/copy";

export class Battle {
  private queue: Queue;
  private attacker: Player;
  private defender: Player;
  constructor(public player1: Player, public player2: Player) {
    this.queue = new Queue();
    this.attacker = Copy.deepCopy(player1);
    this.defender = Copy.deepCopy(player2);

  }


}
