<script lang="ts">
	import Modal from './Modal.svelte';
	import { type TodoInterface, PrioEnum } from '../types/todo';
	import { todos } from '../store';
	import Button from './Button.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { v4 as uuid } from 'uuid';
	import { finishTimeValidation } from '../[slug]/utils/addFormValidation';
	import {
		clearAddFormValidationMessages,
		finishDateValidationMessage,
		titleValidationMessage
	} from '../[slug]/store/AddForm';
	import AddEditForm from './AddEditForm.svelte';

	export let isOpen;
	export let todo: TodoInterface | undefined = undefined;
	export let id: string;

	let titleValue = '';
	let descriptionValue = '';
	let finishTimeValue = 0;
	let prioValue: PrioEnum;

	let isFinishDateCorrect = false;
	let isTitleCorrect = false;

	onMount(() => {
		if (todo) {
			titleValue = todo.title;
			descriptionValue = todo.description;
			finishTimeValue = todo.finishTime;
			prioValue = todo.prio;
		}
	});

	onDestroy(() => {
		titleValue = '';
		descriptionValue = '';
		finishTimeValue = 0;
		prioValue = PrioEnum.medium;
		clearAddFormValidationMessages();
	});

	const closeModal = () => {
		isOpen = false;
	};

	const handleAdd = () => {
		clearAddFormValidationMessages();

		finishTimeValidation(finishTimeValue);

		const values: TodoInterface = {
			id: uuid(),
			title: titleValue,
			description: descriptionValue,
			initialTime: new Date().getTime(),
			finishTime: finishTimeValue,
			isFinished: false,
			prio: prioValue
		};

		if ($titleValidationMessage || $finishDateValidationMessage) return;

		todos.update((items) => [values, ...items]);
		closeModal();
	};

	const handleEdit = () => {
		const oldValues = todo;
		if (!oldValues) {
			return;
		}

		const newValues: TodoInterface = {
			...oldValues,
			title: titleValue,
			description: descriptionValue,
			finishTime: finishTimeValue,
			prio: prioValue
		};

		const copyTodos = [...$todos];
		const taskIndex = copyTodos.findIndex((todo) => todo.id === newValues.id);
		copyTodos.splice(taskIndex, 1, newValues);

		todos.set(copyTodos);
		isOpen = false;
	};
</script>

<Modal {id} title={todo ? 'Edit task' : 'Add task'}>
	<div class="modal-content">
		<AddEditForm
			bind:titleValue
			bind:descriptionValue
			bind:prioValue
			bind:finishTimeValue
			handleSubmit={todo ? handleEdit : handleAdd}
			bind:isTitleCorrect
			bind:isFinishDateCorrect
		/>

		<div class="modal-footer">
			<Button
				id="add-edit-modal-cancel-button"
				type="button"
				onClick={closeModal}
				text="Cancel"
				className="footer-modal-button"
			/>
			<Button
				id="add-edit-modal-handle-button"
				onClick={todo ? handleEdit : handleAdd}
				text={todo ? 'Update' : 'Add'}
				className={isTitleCorrect && isFinishDateCorrect ? 'footer-modal-button' : 'disabled'}
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
