<script lang="ts">
	export let id: string;
	export let type: string;
	export let value: string | number;
	export let title: string;
	export let validation: () => Promise<void>;
	export let validateMessage = '';

	interface CustomInputHTMLElement extends HTMLElement {
		type: string;
	}

	const setType = (node: CustomInputHTMLElement) => {
		node.type = type;
	};
</script>

<div class="label-wrapper">
	<label for={id}>{title}: </label>
	{#if validateMessage}
		<span>{validateMessage}</span>
	{/if}
</div>
<input
	on:keyup={() => validation()}
	on:focusout={() => validation()}
	{id}
	use:setType
	bind:value
	class:validate-error={validateMessage}
/>

<style>
	.label-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	label {
		flex-grow: 1;
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
		color: #db1414;
		font-weight: bold;
	}

	:global(.date-picker__header) {
		position: relative;
		display: flex;
		padding: 20px 0;
		width: 270px;
		background-color: #008080;
	}

	:global(.date-picker) {
		display: flex;
		flex-direction: column;
		width: 270px;
		background-color: #008080;
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
		color: #f5f5f5;
		font-size: 0.9rem;
	}

	:global(.date-picker__arrow-left, .date-picker__arrow-right) {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #f5f5f5;
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
		display: flex;
		flex-direction: column;
	}

	:global(input::-webkit-outer-spin-button),
	:global(input::-webkit-inner-spin-button) {
		-webkit-appearance: none;
		margin: 0;
	}

	:global(.date-picker__clock) {
		display: flex;
		justify-content: center;
	}

	:global(.date-picker__clock input) {
		text-align: center;
		width: 50px;
		padding: 10px 0;
		font-size: 1.1rem;
		background-color: #049a9a;
		border: 1px solid #f5e5e5;
		color: #f5e5e5;
		outline: none;
	}

	:global(.date-picker__clock input:nth-child(1)) {
		border-right: none;
	}

	:global(.date-picker__table) {
		width: 100%;
	}

	:global(.date-picker__days-header) {
		height: 40px;
	}

	:global(.date-picker__th) {
		font-size: 0.9rem;
		width: calc(100% / 7);
	}

	:global(.date-picker__table .day) {
		text-align: center;
		line-height: 1.5rem;
		cursor: pointer;
	}

	:global(.date-picker__table .day:hover) {
		background-color: pink;
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
		background-color: #87cefa;
	}

	:global(.calendar-wrapper) {
		position: relative;
	}
	:global(#calendar, .calendar-actions) {
		position: absolute;
		bottom: 0;
		right: 0;
	}
</style>
