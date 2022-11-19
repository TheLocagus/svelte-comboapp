import {PrioEnum} from "../types/todo";

export const signPrio = (prio: PrioEnum) => {
  switch (prio) {
    case PrioEnum.low:
      return 'low-prio prio';
    case PrioEnum.medium:
      return 'medium-prio prio';
    case PrioEnum.hard:
      return 'hard-prio prio';
    case PrioEnum.extreme:
      return 'extreme-prio prio';
  }
}