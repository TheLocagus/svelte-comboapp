import type {LayoutLoad} from "./$types";
import {TodoTypeEnum} from "./types/todo";

export const load: LayoutLoad = () => {
  return {
    sections: [
      { slug: 'todo', title: 'In progress', todoType: TodoTypeEnum.inProgress },
      { slug: 'done', title: 'Done', todoType: TodoTypeEnum.done },
      { slug: 'abandoned', title: 'Abandoned', todoType: TodoTypeEnum.abandoned },
    ]
  };
}