<script lang="ts">
	import { finishTimeStore } from '../../store';
	import { DatePicker } from '../../utils/datePicker';
	export let id: string;
	export let value: string | number;
	export let title: string;
	export let validation: () => Promise<void>;
	export let validateMessage = '';

	let datePicker: DatePicker;

	const showCalendar = () => {
		if (document.querySelector('.date-picker')) return;
		datePicker = new DatePicker();
		datePicker.init();
	};

	$: value = $finishTimeStore;
</script>

<label for={id}>{title}: </label>
{#if validateMessage}
	<span>{validateMessage}</span>
{/if}

<div class="calendar-wrapper">
	<div id="calendar" />
</div>
{#key $finishTimeStore}
	<input
		{id}
		type="input"
		readonly
		bind:value={$finishTimeStore}
		on:click={showCalendar}
		class:validate-error={validateMessage}
	/>
{/key}

<style>
	label {
		margin: 10px 0 5px;
	}

	input {
		outline: none;
		border: 1px solid black;
		padding: 10px 5px;
		font-size: 18px;
		border-radius: 5px;
		background-color: pink;
	}
</style>
