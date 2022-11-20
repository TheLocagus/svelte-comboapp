import type {PageLoad} from './$types';
import {TodoTypeEnum} from "../types/todo";
import {mode} from "../store";

export const load: PageLoad = ({ params }) => {

  switch(params.slug){
    case 'todo':
      mode.set(TodoTypeEnum.inProgress)
      return {
        glow: TodoTypeEnum.inProgress,
      };
    case 'done':
      mode.set(TodoTypeEnum.done)
      return {
        glow: TodoTypeEnum.done,
      };
    case 'abandoned':
      mode.set(TodoTypeEnum.abandoned)
      return {
        glow: TodoTypeEnum.abandoned,
      };
  }

}