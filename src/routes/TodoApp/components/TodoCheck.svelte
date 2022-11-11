<script lang="ts">

  import Button from "./Button.svelte";
  import Todo from "../todo/components/Todo.svelte";
  import {todos} from "../store.js";
  import {TodoTypeEnum} from "../types/todo.js";
  import IconContainer from "./IconContainer.svelte";
  import PlusIcon from "./PlusIcon.svelte";
  import {backOut, bounceOut, circInOut, circOut, cubicInOut, expoOut, quintOut} from "svelte/easing";
  import { flip } from 'svelte/animate';
  import {fly} from 'svelte/transition'

  export let mode;
  export let openAddModal;
  export let setColorPrio;
  export let showDetails;
  export let showEdit;
  export let removeTodo;
  export let toggleFinished;


</script>

{#if mode === TodoTypeEnum.inProgress}
    <div class="add-todo-container">
<!--        <Button className="add-todo" type="button" text="Add TODO" onClick="{openAddModal}"/>-->
        <div class="plus-icon" on:click={openAddModal}>
            <IconContainer fill={true}>
                    <PlusIcon height="15px"/>
            </IconContainer>
        </div>
        <div class="text">
            <p>Add a task</p>
        </div>
    </div>
{/if}
<div class="todo-container">
    {#if mode === TodoTypeEnum.inProgress}
        {#each $todos.filter(todo => !todo.isFinished) as todo, i (todo.id)}
            <div out:fly={{x:100, duration: 600}} animate:flip="{{delay: 450, duration: 250, easing: quintOut}}">
                <Todo
                        {todo}
                        {setColorPrio}
                        {showDetails}
                        {showEdit}
                        {removeTodo}
                        {toggleFinished}
                />
            </div>
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
                    {toggleFinished}
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
                    {toggleFinished}
            />
        {:else}
            <h2 class="message">Your DoneList is empty.</h2>
        {/each}
    {/if}
</div>

<style>
    :global(.plus){
        fill: black;
    }

    .plus-icon:hover :global(.plus) {
        fill: white;
        transform: rotate(180deg);
        transition: 0.2s;
    }

    .add-todo-container {
        margin-top: 20px;
        display: flex;
        align-items: center;
        width: 50%;
        padding: 10px 7px;
        border: 1px solid #444;
        border-radius: 10px;
        color: #b4b3b3;
    }

    .add-todo-container .text {
        margin-left: 10px;
    }

    .todo-container {
        flex-basis: 80%;
        margin: 50px auto 0;
        height: 100%;
        width: 50%;
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