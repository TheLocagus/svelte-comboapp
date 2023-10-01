<script lang="ts">
	import type { TodoTypeEnum } from '../types/todo';
	import TodoCheck from './TodoCheck.svelte';

	export let mode: TodoTypeEnum;
</script>

<main id="layout-main">
	<TodoCheck {mode} />
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
