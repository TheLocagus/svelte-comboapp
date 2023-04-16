<script lang="ts">
	import { emptyFunction } from '../[slug]/utils/emptyFunction';
	import RemoveIcon from './RemoveIcon.svelte';
	export let click: () => void;
</script>

<div class="remove" on:click={click} on:keypress={emptyFunction}>
	<RemoveIcon height="16px" />
</div>

<style>
	.remove {
		cursor: pointer;
		margin: 0 5px;
	}

	.remove:hover :global(.remove-icon) {
		fill: deeppink;
	}
</style>
