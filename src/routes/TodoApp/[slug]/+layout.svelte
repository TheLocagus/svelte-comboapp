<script lang="ts">
	import Button from '../components/Button.svelte';
	import { mode } from '../store.js';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="app-container">
	<div class="todo-views-container">
		{#each data.sections as section (section)}
			<Button
				className="todo-views-button"
				text={section.title}
				url={`/todoapp/${section.slug}`}
				toGlow={$mode === section.todoType}
			/>
		{/each}
	</div>
	<slot />
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
		margin-bottom: 30px;
	}
</style>
