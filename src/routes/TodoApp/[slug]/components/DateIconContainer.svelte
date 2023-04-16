<script lang="ts">
	import EndDateIcon from '../../components/EndDateIcon.svelte';
	import StartDateIcon from '../../components/StartDateIcon.svelte';
	import { msToDateWithTime } from '../utils/dateParsers';

	export let type: 'add' | 'end' = 'add';
	export let time: number;
</script>

<div class="time">
	{#if type === 'add'}
		<StartDateIcon height="16px" />
	{:else}
		<EndDateIcon height="16px" />
	{/if}
	<span>{msToDateWithTime(time)}</span>
</div>

<style>
	.time {
		display: flex;
		align-items: center;
		margin-right: 0.8rem;
	}

	.time span {
		margin-left: 3px;
	}
</style>
