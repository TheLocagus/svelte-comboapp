<script lang="ts">
	import { PrioEnum, TodoTypeEnum } from '../types/todo';
	import TodoCheck from './TodoCheck.svelte';
	import { parseFinishTimeValue } from '../utils/parseFinishTime';

	export let mode: TodoTypeEnum;

	let titleValue = '';
	let descriptionValue = '';
	let finishTimeValue = parseFinishTimeValue();
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
