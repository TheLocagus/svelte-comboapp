<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { finishTimeStore } from '../../store';
	import { DatePicker } from '../../utils/datePicker';
	import { msToDateWithTime } from '../utils/dateParsers';
	export let id: string;
	export let value: number;
	export let title: string;
	export let validateMessage = '';

	let datePicker: DatePicker;

	onMount(() => {
		datePicker = new DatePicker();

		if (!value) {
			return;
		}
		value = datePicker.getValue(value as number);
	});

	onDestroy(() => {
		finishTimeStore.set('');
	});

	const showCalendar = () => {
		if (document.querySelector('.date-picker')) return;
		datePicker.init();
	};

	$: if ($finishTimeStore) {
		value = $finishTimeStore;
	}
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
		value={value ? msToDateWithTime(datePicker?.getValue(value)) : ''}
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
