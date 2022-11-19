<script lang="ts">
  import {v4 as uuid} from 'uuid';
  import {todos} from '../store';
  import type {TodoInterface} from "../todo"
  import {ModalTypeEnum, PrioEnum, TodoTypeEnum} from "../types/todo";
  import Button from "../components/Button.svelte";
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
    <div class="todo-views-container">
        <Button className="todo-views-button" text="In progress" url="/todoapp/todo"
                toGlow="{mode === TodoTypeEnum.inProgress}"/>
        <Button className="todo-views-button" text="Done" url="/todoapp/done" toGlow="{mode === TodoTypeEnum.done}"/>
        <Button className="todo-views-button" text="Abandoned" url="/todoapp/abandoned"
                toGlow="{mode === TodoTypeEnum.abandoned}"/>
    </div>
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
        min-height: 101vh;
        width: 100%;
        background-color: #1a1a1a;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .todo-views-container {
        display: flex;
        justify-content: center;
        width: 100%;
    }
</style>