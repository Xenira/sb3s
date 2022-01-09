import { Battle } from "./battle";
import { Queue } from "./queue";








export enum EventType {
  SLAY,
  CHARACTER_DEATH,
  CHARACTER_SUMMON,
  STAT_GAIN,
  START_PLAYER,
  ATTACK,
  PLAYER_ATTACK
}

export interface IEventData {
  battle: Battle
}

export interface IEvent {
  type: EventType,
  data: IEventData,
  execute: (queue: Queue) => void
}
