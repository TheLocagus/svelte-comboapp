<script lang="ts">
	import { PrioEnum, TodoTypeEnum } from '../types/todo';
	import TodoCheck from './TodoCheck.svelte';

	export let mode: TodoTypeEnum;

	let titleValue = '';
	let descriptionValue = '';
	let finishTimeValue = 0;
	let prioValue = PrioEnum.medium;
</script>

<main>
	<TodoCheck {mode} bind:titleValue bind:descriptionValue bind:finishTimeValue bind:prioValue />
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
