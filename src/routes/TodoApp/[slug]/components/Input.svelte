<script lang="ts">
	import { DatePicker } from '../../utils/datePicker';
	import { msToDate } from '../utils/dateParsers';

	export let id: string;
	export let type: string;
	export let value: string | number;
	export let title: string;
	export let validation: () => void = () => true;
	export let validateMessage = '';

	let isCalendarOpen = false;
	let datePicker;
	let inputValue = '';

	interface CustomInputHTMLElement extends HTMLElement {
		type: string;
	}

	const setType = (node: CustomInputHTMLElement) => {
		node.type = type;
	};

	const showCalendar = () => {
		if (isCalendarOpen) return;
		isCalendarOpen = true;
		console.log(document.getElementById('calendar'));
		datePicker = new DatePicker();
		datePicker.init();

		setTimeout(() => {
			datePicker.destroy();
		}, 5000);
	};
</script>

{#if type === 'date'}
	<label for={id}>{title}: </label>
	{#if validateMessage}
		<span>{validateMessage}</span>
	{/if}
	<input
		{id}
		type="input"
		readonly
		value={inputValue || ''}
		on:click={showCalendar}
		class:validate-error={validateMessage}
	/>

	<div class="calendar-wrapper">
		<div id="calendar" />
		{#if isCalendarOpen}
			<div class="calendar-actions">
				<button
					class=""
					on:click={(e) => {
						e.preventDefault();
						const timestamp = datePicker.getValue();
						inputValue = msToDate(timestamp);
						value = timestamp;
						validation();
					}}>Ok</button
				>
			</div>
		{/if}
	</div>
{:else}
	<label for={id}>{title}: </label>
	{#if validateMessage}
		<span>{validateMessage}</span>
	{/if}
	<input
		on:keyup={() => validation()}
		{id}
		use:setType
		bind:value
		class:validate-error={validateMessage}
	/>
{/if}

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

	.validate-error {
		border: 1px solid red;
	}

	label + span {
		margin-left: 10px;
		font-size: 0.8rem;
		color: #8d0707;
		font-weight: bold;
	}

	:global(.date-picker__header) {
		position: relative;
		display: flex;
		width: 400px;
		background-color: bisque;
		flex-basis: 20%;
	}

	:global(.date-picker) {
		display: flex;
		flex-direction: column;
		height: 300px;
		width: 400px;
		background-color: #8d0779;
	}

	:global(.date-picker__header__arrows) {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	:global(.date-value) {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: black;
	}

	:global(.date-picker__arrow-left, .date-picker__arrow-right) {
		display: flex;
		justify-content: center;
		align-items: center;
		color: black;
	}

	:global(.date-picker__arrow-left) {
		width: 20%;
		height: 100%;
		cursor: pointer;
	}
	:global(.date-picker__arrow-right) {
		width: 20%;
		height: 100%;
		cursor: pointer;
	}

	:global(.date-picker__arrow-left:hover, .date-picker__arrow-right:hover) {
		transform: scale(1.2);
	}

	:global(.date-picker__calendar) {
		flex-basis: 70%;
	}

	:global(.date-picker__table) {
		/* height: 50px; */
		width: 100%;
	}

	:global(.date-picker__days-header) {
		height: 50px;
	}

	:global(.date-picker__th) {
		width: calc(100% / 7);
	}

	:global(.date-picker__table .day) {
		text-align: center;
		line-height: 1.5rem;
		cursor: pointer;
	}

	:global(.date-picker__table .day:hover) {
		background-color: aqua;
	}

	:global(.date-picker__confirm-div) {
		flex-basis: 10%;
		background-color: aqua;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	:global(.date-picker__confirm-button) {
		margin-right: 10px;
		font-size: 0.8rem;
		border: 1px solid black;
		background-color: white;
		border-radius: 5px;
		padding: 2px 5px;
		cursor: pointer;
	}

	:global(.day-active) {
		background-color: gold;
	}
</style>
