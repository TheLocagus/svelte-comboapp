<script lang="ts">
	import Modal from './Modal.svelte';
	import { type TodoInterface, PrioEnum } from '../types/todo';
	import { todos } from '../store';
	import Button from './Button.svelte';
	import { onDestroy } from 'svelte';
	import { v4 as uuid } from 'uuid';
	import AddForm from '../[slug]/components/AddForm.svelte';
	import { finishTimeValidation } from '../[slug]/utils/addFormValidation';
	import {
		clearAddFormValidationMessages,
		finishDateValidationMessage,
		titleValidationMessage
	} from '../[slug]/store/AddForm';
	export let isOpen;

	const closeModal = () => {
		isOpen = false;
	};
	let titleValue = '';
	let descriptionValue = '';
	let finishTimeValue = 0;
	let prioValue: PrioEnum;

	let isFinishDateCorrect = false;
	let isTitleCorrect = false;

	onDestroy(() => {
		titleValue = '';
		descriptionValue = '';
		finishTimeValue = 0;
		prioValue = PrioEnum.medium;
		clearAddFormValidationMessages();
	});

	const handleAddModal = () => {
		clearAddFormValidationMessages();

		finishTimeValidation(finishTimeValue);

		const values: TodoInterface = {
			id: uuid(),
			title: titleValue,
			description: descriptionValue,
			initialTime: new Date().toLocaleDateString(),
			finishTime: finishTimeValue,
			isFinished: false,
			prio: prioValue
		};

		if ($titleValidationMessage || $finishDateValidationMessage) return;

		todos.update((items) => [values, ...items]);
		closeModal();
	};
</script>

<Modal title="Add task">
	<div class="modal-content">
		<AddForm
			bind:titleValue
			bind:descriptionValue
			bind:prioValue
			bind:finishTimeValue
			handleSubmit={handleAddModal}
			bind:isTitleCorrect
			bind:isFinishDateCorrect
		/>

		<div class="modal-footer">
			<Button type="button" onClick={closeModal} text="Cancel" className="footer-modal-button" />
			<Button
				type="submit"
				onClick={handleAddModal}
				text="Add"
				className={!isTitleCorrect || !isFinishDateCorrect ? 'disabled' : 'footer-modal-button'}
				disabled={!isTitleCorrect || !isFinishDateCorrect}
			/>
		</div>
	</div>
</Modal>

<style>
	.modal-footer {
		margin: 35px 0 20px;
	}
</style>
