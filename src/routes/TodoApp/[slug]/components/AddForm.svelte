<script lang="ts">
	import { PrioEnum } from '../../types/todo.js';
	import Input from './Input.svelte';
	import TextArea from './TextArea.svelte';
	import Select from './Select.svelte';
	import type { SelectDataType } from '../types/select.js';
	import CalendarInput from './CalendarInput.svelte';

	export let titleValue: string;
	export let descriptionValue: string;
	export let finishTimeValue: number;
	export let prioValue: PrioEnum;
	export let handleSubmit: () => void;
	export let isTitleCorrect;
	export let isFinishDateCorrect;

	const selectData: SelectDataType = {
		Low: PrioEnum.low,
		Medium: PrioEnum.medium,
		Hard: PrioEnum.hard,
		Extreme: PrioEnum.extreme
	};

	let titleValidateMessage = '';
	let dateValidateMessage = '';

	const titleValidation = async () => {
		const value = titleValue;
		if (!value.toString().trim()) {
			titleValidateMessage = 'Puste pole.';
			return;
		} else {
			titleValidateMessage = '';
			return;
		}
	};

	$: !dateValidateMessage && finishTimeValue
		? (isFinishDateCorrect = true)
		: (isFinishDateCorrect = false);
	$: !titleValidateMessage && titleValue ? (isTitleCorrect = true) : (isTitleCorrect = false);
</script>

<form on:submit|preventDefault={handleSubmit} class="modal-content__form">
	<Input
		id="title"
		type="text"
		bind:value={titleValue}
		title="Title"
		validation={titleValidation}
		bind:validateMessage={titleValidateMessage}
	/>
	<TextArea id="desc" bind:value={descriptionValue} />
	<CalendarInput
		id="finishTime"
		bind:value={finishTimeValue}
		title="Termin date"
		bind:validateMessage={dateValidateMessage}
	/>
	<Select id="prio" title="Priority" bind:value={prioValue} {selectData} />
</form>

<style>
	.modal-content__form {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		width: 70%;
	}
</style>
