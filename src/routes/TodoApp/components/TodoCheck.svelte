<script lang="ts">

  import Button from "./Button.svelte";
  import Todo from "../todo/components/Todo.svelte";
  import {todos} from "../store.js";
  import {TodoTypeEnum} from "../types/todo.js";

  export let mode;
  export let openAddModal;
  export let setColorPrio;
  export let showDetails;
  export let showEdit;
  export let removeTodo;

</script>

{#if mode === TodoTypeEnum.inProgress}
    <div class="add-todo-container">
        <Button className="add-todo" type="button" text="Add TODO" onClick="{openAddModal}"/>
    </div>
{/if}
<div class="todo-container">
    {#if mode === TodoTypeEnum.inProgress}
        {#each $todos.filter(todo => !todo.isFinished) as todo, i (todo.id)}
            <Todo
                    {todo}
                    {setColorPrio}
                    {showDetails}
                    {showEdit}
                    {removeTodo}
            />
        {:else}
            <h2 class="message">Your TodoList is empty.</h2>
        {/each}
    {:else if mode === TodoTypeEnum.done}
        {#each $todos.filter(todo => todo.isFinished && !todo.isFailed) as todo, i (todo.id)}
            <Todo
                    {todo}
                    {setColorPrio}
                    {showDetails}
                    {showEdit}
                    {removeTodo}
            />
        {:else}
            <h2 class="message">Your DoneList is empty.</h2>
        {/each}
    {:else if mode === TodoTypeEnum.abandoned}
        {#each $todos.filter(todo => todo.isFailed) as todo, i (todo.id)}
            <Todo
                    {todo}
                    {setColorPrio}
                    {showDetails}
                    {showEdit}
                    {removeTodo}
            />
        {:else}
            <h2 class="message">Your DoneList is empty.</h2>
        {/each}
    {/if}
</div>

<style>
    .add-todo-container {
        height: 100%;
        width: 100%;
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .todo-container {
        flex-basis: 80%;
        margin: 0 auto;
        height: 100%;
        width: 70%;
        flex-grow: 3;
        position: relative;
    }

    .message {
        color: whitesmoke;
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 30px;
        text-shadow: -1px 0 orangered, 0 1px orangered, 1px 0 orangered, 0 -1px orangered;
    }
</style>