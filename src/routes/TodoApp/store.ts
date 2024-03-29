import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import type { TodoInterface } from './types/todo';
import { PrioEnum, TodoTypeEnum } from './types/todo';

export const mode: Writable<TodoTypeEnum> = writable();

export const todos: Writable<TodoInterface[]> = writable([
	{
		id: '1',
		title: 'Write code',
		description: 'Losowy opis',
		prio: PrioEnum.low,
		initialTime: new Date().getTime(),
		finishTime: new Date().getTime() + 10 * 24 * 60 * 60 * 1000,
		isFinished: true,
		isFailed: true
	},
	{
		id: '2',
		title: 'Write code',
		description: 'Losowy opis',
		prio: PrioEnum.hard,
		initialTime: new Date().getTime(),
		finishTime: new Date().getTime() + 10 * 24 * 60 * 60 * 1000,
		isFinished: false
	},
	{
		id: '3',
		title: 'Xyz',
		description: 'Losowy opis',
		prio: PrioEnum.extreme,
		initialTime: new Date().getTime(),
		finishTime: new Date().getTime() + 10 * 24 * 60 * 60 * 1000,
		isFinished: true,
		isFailed: false
	},
	{
		id: '4',
		title: 'Wyjść z psem',
		description: 'Losowy opis',
		prio: PrioEnum.low,
		initialTime: new Date().getTime(),
		finishTime: new Date().getTime() + 10 * 24 * 60 * 60 * 1000,
		isFinished: false
	},
	{
		id: '5',
		title: 'Umyć naczynia',
		description: 'Losowy opis',
		prio: PrioEnum.low,
		initialTime: new Date().getTime(),
		finishTime: new Date().getTime() + 10 * 24 * 60 * 60 * 1000,
		isFinished: false
	},
	{
		id: '6',
		title: 'Zrobić zakupy',
		description: 'Losowy opis',
		prio: PrioEnum.low,
		initialTime: new Date().getTime(),
		finishTime: new Date().getTime() + 10 * 24 * 60 * 60 * 1000,
		isFinished: false
	}
]);

export const finishTimeStore: Writable<'' | number> = writable('');
