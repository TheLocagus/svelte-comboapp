<script lang="ts">
  import {todos} from '../store';
  import {PrioEnum} from "../types/todo";
  import TodoCheck from "./TodoCheck.svelte";
  import {parseFinishTimeValue} from "../utils/parseFinishTime";

  export let mode;

  let titleValue = '';
  let descriptionValue = '';
  let finishTimeValue = parseFinishTimeValue();
  let prioValue = PrioEnum.medium;

  const toggleFinished = (id: string) => {
    const updatedState = [...$todos].map(item => {
      if(item.id === id){
        item.isFinished = !item.isFinished;
        return item;
      } else return item;
    });
    todos.set(updatedState);
  }
</script>

<main>
    <TodoCheck
            {mode}
            {toggleFinished}
            bind:titleValue
            bind:descriptionValue
            bind:finishTimeValue
            bind:prioValue
    />
</main>

<style>
    main {
        width: 100%;
        background-color: #1a1a1a;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>