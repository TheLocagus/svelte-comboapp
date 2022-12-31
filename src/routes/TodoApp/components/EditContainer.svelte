<script lang="ts">
	import { emptyFunction } from '../[slug]/utils/emptyFunction';
	import EditIcon from './EditIcon.svelte';
	export let click: () => void;
</script>

<div class="edit" on:click={click} on:keypress={emptyFunction}>
	<EditIcon height="16px" />
</div>

<style>
	.edit {
		cursor: pointer;
		margin: 0 5px;
	}

	.edit:hover :global(.edit-icon) {
		fill: deeppink;
	}
</style>
