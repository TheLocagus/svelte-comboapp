<script lang="ts">
	import Button from '../components/Button.svelte';
	import { mode } from '../store.js';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="app-container">
	<nav class="todo-views-container">
		{#each data.sections as section (section)}
			<Button
				id={`navigation-to-${section.title.split(' ').join('-')}`}
				className="todo-views-button"
				text={section.title}
				url={`/todoapp/${section.slug}`}
				toGlow={$mode === section.todoType}
			/>
		{/each}
	</nav>
	<slot />
</div>

<style>
	.app-container {
		min-height: 101vh; /* @TODO: make showing scroll doesnt move layout then change min-height to 100vh */
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
