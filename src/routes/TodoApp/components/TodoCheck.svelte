<script lang="ts">

  import Button from "./Button.svelte";
  import Todo from "../todo/components/Todo.svelte";
  import {todos} from "../store.js";
  import {ModalTypeEnum, TodoTypeEnum} from "../types/todo.js";
  import IconContainer from "./IconContainer.svelte";
  import PlusIcon from "./PlusIcon.svelte";
  import { quintOut} from "svelte/easing";
  import { flip } from 'svelte/animate';
  import {fly} from 'svelte/transition'
  import Modal from "./Modal.svelte";
  import FormTodo from "./FormTodo.svelte";
  import AddModal from "./AddModal.svelte";

  export let mode;
  export let setColorPrio;
  export let toggleFinished;
  export let titleValue;
  export let descriptionValue;
  export let finishTimeValue;
  export let prioValue;
  export let modalType;

  let isOpen = false;
  const openModal = () => {
    console.log('wchodzi')
    isOpen = true;
  }

  $: tasks = $todos.filter(todo => !todo.isFinished);
</script>


{#if mode === TodoTypeEnum.inProgress}
<!--    <Modal-->
<!--            bind:isOpen-->
<!--    >-->
<!--        <div slot="modal-content" class="modal-content">-->
<!--            <FormTodo-->
<!--                    bind:titleValue="{titleValue}"-->
<!--                    bind:descriptionValue="{descriptionValue}"-->
<!--                    bind:finishTimeValue="{finishTimeValue}"-->
<!--                    bind:prioValue="{prioValue}"-->
<!--                    bind:isOpen-->
<!--                    {type}-->
<!--            />-->
<!--        </div>-->
<!--    </Modal>-->
    <AddModal bind:isOpen />
    <div class="add-todo-container">
        <div class="plus-icon" on:click={openModal}>
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
        {#each tasks as todo (todo.id)}
            <div out:fly={{x:100, duration: 600}} animate:flip="{{delay: 450, duration: 250, easing: quintOut}}">
                <Todo
                        {todo}
                        {setColorPrio}
                        {toggleFinished}
                        bind:titleValue
                        bind:descriptionValue
                        bind:finishTimeValue
                        bind:prioValue
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
                    {toggleFinished}
                    bind:titleValue
                    bind:descriptionValue
                    bind:finishTimeValue
                    bind:prioValue
                    bind:modalType
            />
        {:else}
            <h2 class="message">Your DoneList is empty.</h2>
        {/each}
    {:else if mode === TodoTypeEnum.abandoned}
        {#each $todos.filter(todo => todo.isFailed) as todo, i (todo.id)}
            <Todo
                    {todo}
                    {setColorPrio}
                    {toggleFinished}
                    bind:titleValue
                    bind:descriptionValue
                    bind:finishTimeValue
                    bind:prioValue
                    bind:modalType
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