<script lang="ts">
	import { todos } from '../../store.js';
	import BottomArrowIcon from './BottomArrowIcon.svelte';
	import IconContainer from '../../components/IconContainer.svelte';
	import DoneIconContainer from '../../components/DoneIconContainer.svelte';
	import EditContainer from '../../components/EditContainer.svelte';
	import RemoveContainer from '../../components/RemoveContainer.svelte';
	import StartDateContainer from './StartDateContainer.svelte';
	import EndDateContainer from './EndDateContainer.svelte';
	import EditModal from '../../components/EditModal.svelte';
	import { signPrio } from '../../utils/signPrio.js';
	import ConfirmModal from './ConfirmModal.svelte';
	import type { TodoInterface } from '../../types/todo.js';
	import { emptyFunction } from '../utils/emptyFunction.js';
	import { msToDate } from '../utils/dateParsers.js';

	export let todo: TodoInterface;

	let isOpen = false;
	let expanded = false;
	let isConfirmModalOpen = false;
	let signedAsDone = false;

	const toggleExpandDetails = () => {
		expanded = !expanded;
	};

	const toggleFinished = (id: string) => {
		const updatedState = [...$todos].map((item) => {
			if (item.id === id) {
				item.isFinished = !item.isFinished;
				return item;
			} else return item;
		});
		signedAsDone = true;
		todos.set(updatedState);
	};

	const showEdit = () => {
		isOpen = true;
	};

	const showConfirmModal = () => {
		isConfirmModalOpen = true;
	};

	const hideConfirmModal = () => {
		isConfirmModalOpen = false;
	};

	const removeTask = () => {
		isConfirmModalOpen = false;
		todos.update((items) => {
			return items.filter((todos) => todos.id !== todo.id);
		});
	};
</script>

<div class="todo">
	{#if isOpen}
		<EditModal bind:isOpen {todo} />
	{/if}
	<div class="todo__confirm">
		<IconContainer
			onClick={() => toggleFinished(todo.id)}
			fill={signedAsDone}
			notVisible={todo.isFailed}
		>
			<DoneIconContainer isFinished={signedAsDone} />
		</IconContainer>
	</div>
	<div class="todo__content">
		<div class="upper-content">
			<div class="todo__title">
				<div class="title">{todo.title}</div>
			</div>
		</div>
		<div class="bottom-content">
			<div class="{signPrio(todo.prio)} todo-prio">
				<div class="prio-icon">
					<div>!</div>
				</div>
				<div class="prio-value">{todo.prio}</div>
			</div>
			<div class="todo__time">
				<div class="time-icon" />
				<div class="time">{msToDate(todo.finishTime)}</div>
			</div>
		</div>
	</div>
	<div class="expand-arrow-content">
		<div class="expand-arrow">
			<span class:rotate={expanded} on:click={toggleExpandDetails} on:keypress={emptyFunction}>
				<BottomArrowIcon height="15px" />
			</span>
		</div>
	</div>
</div>

<div class="expanded-content" class:expanded>
	<div class="expanded-details">
		<div class="description-row">
			<div class="description">{todo.description}</div>
		</div>
		<div class="details-row">
			<div class="time-summary">
				<StartDateContainer time={todo.initialTime} />
				<EndDateContainer time={todo.finishTime} />
			</div>
			<div class="handling-buttons">
				<EditContainer click={showEdit} />
				<RemoveContainer click={showConfirmModal} />
			</div>
		</div>
	</div>
</div>
{#if isConfirmModalOpen}
	<ConfirmModal taskTitle={todo.title} {removeTask} {hideConfirmModal} />
{/if}

<style>
	.todo {
		margin: 2px 0;
		display: flex;
		align-items: center;
		padding: 15px 0;
		background-color: #444;
		border-radius: 20px;
		color: #ded9d9;
	}

	.todo__confirm {
		flex-basis: 10%;
		display: flex;
		align-items: flex-start;
		justify-content: center;
	}

	.todo__content {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	.bottom-content {
		display: flex;
		align-items: center;
		margin-top: 5px;
		font-size: 0.8em;
		color: #aaa;
	}

	.prio-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: bold;
		height: 18px;
		width: 18px;
		border-radius: 50%;
		margin-right: 5px;
	}

	.prio-value::first-letter {
		text-transform: uppercase;
	}

	.todo-prio {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 10px;
	}

	.todo-prio::after {
		content: '|';
		margin-left: 10px;
		color: #aaa;
	}

	.todo__prio {
		flex-basis: 5%;
		display: flex;
		justify-content: center;
	}

	.todo__time {
		flex-basis: 45%;
	}

	.todo__buttons {
		flex-basis: 10%;
		display: flex;
		flex-direction: column;
	}

	.prio {
		font-weight: bold;
		margin-left: 2px;
	}

	.low-prio {
		color: #78b006;
	}

	.low-prio > .prio-icon {
		background-color: #78b006;
		color: white;
	}

	.medium-prio {
		color: yellow;
	}

	.medium-prio > .prio-icon {
		background-color: yellow;
		color: white;
	}

	.hard-prio {
		color: #ea0606;
	}

	.hard-prio > .prio-icon {
		background-color: #ea0606;
		color: white;
	}

	.extreme-prio {
		color: black;
	}

	.extreme-prio > .prio-icon {
		background-color: black;
		color: white;
	}

	.expand-arrow-content {
		flex-basis: 10%;
	}

	.expand-arrow span {
		display: inline-block;
		cursor: pointer;
		transition: 0.2s;
	}

	.rotate {
		transform: rotate(-180deg);
	}

	.expanded-content {
		overflow: hidden;
		max-height: 0;
		transition: max-height 0.3s;
		background-color: #444;
		border-radius: 20px;
		width: 98%;
		margin: 0 auto;
	}

	.expanded-content.expanded {
		max-height: 200px;
	}

	.expanded-content .expanded-details {
		height: 200px;
		margin: 1px 0;
		display: flex;
		flex-direction: column;
		padding: 15px 10px;
		background-color: #444;
		color: #ded9d9;
	}

	.description-row {
		flex-basis: 80%;
		overflow: auto;
		padding-right: 10px;
	}

	.details-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-basis: 20%;
		font-size: 0.9em;
		border-top: 1px solid #1a1a1a;
		padding-left: 5px;
		margin-right: 15px;
	}

	.details-row .time-summary {
		display: flex;
	}

	.description-row::-webkit-scrollbar {
		width: 0.4rem;
	}
	.description-row::-webkit-scrollbar-track {
		background-color: pink;
		border-radius: 10px;
	}
	.description-row::-webkit-scrollbar-thumb {
		background-color: deeppink;
		border-radius: 10px;
	}

	.handling-buttons {
		display: flex;
		align-items: center;
	}
</style>
