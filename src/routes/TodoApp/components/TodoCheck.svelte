<script lang="ts">
	import Todo from '../[slug]/components/Todo.svelte';
	import { todos } from '../store.js';
	import { TodoTypeEnum } from '../types/todo.js';
	import IconContainer from './IconContainer.svelte';
	import PlusIcon from './PlusIcon.svelte';
	import { quintOut } from 'svelte/easing';
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
	import AddEditModal from './AddEditModal.svelte';

	export let mode: TodoTypeEnum;

	let isOpen = false;
	const openModal = () => {
		isOpen = true;
	};

	$: tasks = $todos.filter((todo) => !todo.isFinished);
</script>

{#if mode === TodoTypeEnum.inProgress}
	{#if isOpen}
		<AddEditModal bind:isOpen />
	{/if}
	<div class="add-todo-container">
		<div class="plus-icon">
			<IconContainer fill={true} onClick={openModal}>
				<PlusIcon height="15px" />
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
			<div>
				<Todo {todo} />
			</div>
		{:else}
			<h2 class="message">Your TodoList is empty.</h2>
		{/each}
	{:else if mode === TodoTypeEnum.done}
		{#each $todos.filter((todo) => todo.isFinished && !todo.isFailed) as todo (todo.id)}
			<Todo {todo} />
		{:else}
			<h2 class="message">Your DoneList is empty.</h2>
		{/each}
	{:else if mode === TodoTypeEnum.abandoned}
		{#each $todos.filter((todo) => todo.isFailed) as todo (todo.id)}
			<Todo {todo} />
		{:else}
			<h2 class="message">Your DoneList is empty.</h2>
		{/each}
	{/if}
</div>

<style>
	:global(.plus) {
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
