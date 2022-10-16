export enum PrioEnum {
  low = 'low',
  medium = 'medium',
  hard = 'hard',
  extreme = 'extreme',
}

export interface TodoInterface {
  id: string;
  title: string;
  description: string;
  prio: PrioEnum;
  initialTime: string;
  finishTime: string;
  isFinished: boolean;
}

export enum ModalTypeEnum {
  off = 'off',
  edit = 'edit',
  add = 'add',
}