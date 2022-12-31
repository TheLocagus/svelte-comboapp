<script lang="ts">
	import EndDateIcon from '../../components/EndDateIcon.svelte';
	export let time: string;
</script>

<div class="time">
	<EndDateIcon height="16px" />
	<span>{time}</span>
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
