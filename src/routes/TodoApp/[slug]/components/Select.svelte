<script lang="ts">
	import type { SelectDataType } from '../types/select';

	export let id: string;
	export let value: string;
	export let title: string;
	export let selectData: SelectDataType;
</script>

<label for={id}>{title}: </label>
<select name={id} {id} bind:value>
	{#each Object.entries(selectData) as [title, value]}
		<option {value}>{title}</option>
	{/each}
</select>

<style>
	label {
		margin: 10px 0 5px;
	}

	select {
		outline: none;
		border: 1px solid black;
		padding: 10px 5px;
		font-size: 18px;
		border-radius: 5px;
		background-color: pink;
		cursor: pointer;
	}

	option {
		cursor: pointer;
	}
</style>
