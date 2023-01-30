<script lang="ts">
	import { DatePicker } from '../../utils/datePicker';

	export let id: string;
	export let type: string;
	export let value: string | number;
	export let title: string;
	export let validateMethod: () => void;
	export let validateMessage;

	interface CustomInputHTMLElement extends HTMLElement {
		type: string;
	}

	const setType = (node: CustomInputHTMLElement) => {
		node.type = type;
	};

	const showCalendar = () => {
		const datePicker = new DatePicker();
		datePicker.init();

		setTimeout(() => {
			datePicker.destroy();
		}, 5000);
	};
</script>

{#if type === 'date'}
	<label for={id}>{title}: </label>
	{#if $validateMessage}
		<span>{$validateMessage}</span>
	{/if}
	<input
		on:change={validateMethod}
		{id}
		use:setType
		bind:value
		on:click={showCalendar}
		class:validate-error={$validateMessage}
	/>
{:else}
	<label for={id}>{title}: </label>
	{#if $validateMessage}
		<span>{$validateMessage}</span>
	{/if}
	<input
		on:focusout={validateMethod}
		{id}
		use:setType
		bind:value
		on:click={showCalendar}
		class:validate-error={$validateMessage}
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

	:global(.date-picker) {
		height: 400px;
		width: 400px;
		background-color: #8d0707;
	}
	:global(.date-picker__header) {
		position: relative;
		display: flex;
		height: 80px;
		width: 400px;
		background-color: bisque;
	}

	:global(.date-picker) {
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
	}

	:global(.date-picker__arrow-left, .date-picker__arrow-right) {
		display: flex;
		justify-content: center;
		align-items: center;
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

	:global(.date-picker__table) {
		height: 50px;
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
</style>
