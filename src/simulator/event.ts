
enum EventType {
  SLAY,
  CHARACTER_DEATH,
  CHARACTER_SUMMON,
  STAT_GAIN
}
interface IEvent<T> {
  type: EventType,
  data: T,
  execute: () => void
}
