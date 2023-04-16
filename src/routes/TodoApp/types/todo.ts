export enum PrioEnum {
	low = 'low',
	medium = 'medium',
	hard = 'hard',
	extreme = 'extreme'
}

export interface TodoInterface {
	id: string;
	title: string;
	description: string;
	prio: PrioEnum;
	initialTime: number;
	finishTime: number;
	isFinished: boolean;
	isFailed?: boolean;
}

export enum ModalTypeEnum {
	off = 'off',
	edit = 'edit',
	add = 'add'
}

export enum TodoTypeEnum {
	inProgress = 'in-progress',
	done = 'done',
	abandoned = 'abandoned'
}
