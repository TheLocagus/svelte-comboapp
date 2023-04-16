<script lang="ts">
	import StartDateIcon from '../../components/StartDateIcon.svelte';
	import { msToDateWithTime } from '../utils/dateParsers';
	export let time: number;
</script>

<div class="time">
	<StartDateIcon height="16px" />
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
