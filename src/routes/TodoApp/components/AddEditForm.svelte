<script lang="ts">
	import CalendarInput from '../[slug]/components/CalendarInput.svelte';
	import TextArea from '../[slug]/components/TextArea.svelte';
	import Input from '../[slug]/components/Input.svelte';
	import Select from '../[slug]/components/Select.svelte';
	import { PrioEnum } from '../types/todo';
	import type { SelectDataType } from '../[slug]/types/select';

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
			titleValidateMessage = 'To pole nie może być puste';
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
