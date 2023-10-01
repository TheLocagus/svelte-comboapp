<script lang="ts">
	import { emptyFunction } from '../[slug]/utils/emptyFunction';

	export let fill = false;
	export let notVisible = false;
	export let onClick: () => void = emptyFunction;
	export let ariaLabel: string;
	export let role: string;
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
	class="icon-container"
	class:fill
	class:notVisible
	on:click={() => onClick()}
	on:keypress={emptyFunction}
	aria-label={ariaLabel}
	{role}
	aria-checked={role === 'checkbox' ? fill : null}
	tabindex={role === 'button' || role === 'checkbox' ? 0 : null}
>
	<slot />
</div>

<style>
	.icon-container {
		border-radius: 8px;
		position: relative;
		height: 23px;
		width: 23px;
		border: 2px solid deeppink;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.fill {
		background-color: deeppink;
	}

	.notVisible {
		display: none;
	}
</style>
