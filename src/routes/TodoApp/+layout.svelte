<script lang="ts">
  import type { LayoutLoad } from './$types';
  import Button from "./components/Button.svelte";
  import {TodoTypeEnum} from "./types/todo.js";
  import {mode} from "./store.js";

    export const load: LayoutLoad = () => {
      return {
        sections: [
          {slug: 'todo', title: 'Todo'},
          {slug: 'done', title: 'Done'},
          {slug: 'abandoned', title: 'Abandoned'},
        ]
      }
    }
</script>
<div class="app-container">
    <div class="todo-views-container">
        <Button className="todo-views-button" text="In progress" url="/todoapp/todo"
                toGlow="{$mode === TodoTypeEnum.inProgress}"/>
        <Button className="todo-views-button" text="Done" url="/todoapp/done" toGlow="{$mode === TodoTypeEnum.done}"/>
        <Button className="todo-views-button" text="Abandoned" url="/todoapp/abandoned"
                toGlow="{$mode === TodoTypeEnum.abandoned}"/>
    </div>
    <slot></slot>
</div>

<style>
    .app-container {
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

