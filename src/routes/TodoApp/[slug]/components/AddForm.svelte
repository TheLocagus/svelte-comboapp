<script lang="ts">
	import { PrioEnum } from '../../types/todo.js';
	import Input from './Input.svelte';
	import TextArea from './TextArea.svelte';
	import Select from './Select.svelte';
	import type { SelectDataType } from '../types/select.js';

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

	const titleValidation = () => {
		const value = titleValue;
		if (!value.toString().trim()) {
			titleValidateMessage = 'Puste pole.';
			return;
		} else {
			titleValidateMessage = '';
			return;
		}
	};

	const finishTimeValidation = () => {
		const value = finishTimeValue;
		value <= new Date().getTime()
			? (dateValidateMessage = 'Podałeś datę z przeszłości')
			: (dateValidateMessage = '');
	};

	$: !dateValidateMessage && finishTimeValue ? (isTitleCorrect = true) : (isTitleCorrect = false);
	$: !titleValidateMessage && titleValue
		? (isFinishDateCorrect = true)
		: (isFinishDateCorrect = false);
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
	<Input
		id="finishTime"
		type="date"
		bind:value={finishTimeValue}
		title="Termin date"
		validation={finishTimeValidation}
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
