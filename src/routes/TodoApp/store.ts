import type {Writable} from "svelte/store";
import {writable} from "svelte/store";
import type {TodoInterface} from "./types/todo";
import {PrioEnum, TodoTypeEnum} from "./types/todo";

export const mode: Writable<TodoTypeEnum> = writable(TodoTypeEnum.inProgress);

export const todos: Writable<TodoInterface[]> = writable([
  {
    id: '1',
    title: 'Write code',
    description: 'Losowy opis',
    prio: PrioEnum.low,
    initialTime: new Date().toLocaleDateString(),
    finishTime: new Date(new Date().getTime() + (10 * 24 * 60 * 60 * 1000)).toLocaleDateString(),
    isFinished: true,
    isFailed: true,
  },
  {
    id: '2',
    title: 'Write code',
    description: 'Losowy opis',
    prio: PrioEnum.hard,
    initialTime: new Date().toLocaleDateString(),
    finishTime: new Date(new Date().getTime() + (10 * 24 * 60 * 60 * 1000)).toLocaleDateString(),
    isFinished: false,
  },
  {
    id: '3',
    title: 'Xyz',
    description: 'Losowy opis',
    prio: PrioEnum.extreme,
    initialTime: new Date().toLocaleDateString(),
    finishTime: new Date(new Date().getTime() + (10 * 24 * 60 * 60 * 1000)).toLocaleDateString(),
    isFinished: true,
    isFailed: false,
  },
])

