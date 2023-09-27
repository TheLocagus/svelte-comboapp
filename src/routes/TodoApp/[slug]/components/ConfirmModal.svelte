<script lang="ts">
	import Modal from '../../components/Modal.svelte';
	import Button from '../../components/Button.svelte';

	export let removeTask: () => void;
	export let hideConfirmModal: () => void;
	export let taskTitle: string;
</script>

<Modal title={`Jesteś pewny, że chcesz usunąć zadanie ${taskTitle}?`}>
	<div class="modal-info-wrapper">
		<div class="modal-info">
			<p>
				Potwierdzenie spowoduje nieodwracalne usunięcie elementu. Jeśli jesteś pewny, wybierz Ok.
			</p>
		</div>
		<div class="modal-actions">
			<div>
				<Button id="confirm-modal-ok-button" type="button" text="Ok" onClick={removeTask} />
				<Button
					id="confirm-modal-cancel-button"
					type="button"
					text="Cancel"
					onClick={hideConfirmModal}
				/>
			</div>
		</div>
	</div>
</Modal>

<style>
	.modal-info {
		margin-bottom: 10px;
		padding: 10px;
	}

	.modal-actions > div {
		width: 30%;
		padding: 5px 0;
		margin: 0 5px;
		border-top: 1px solid pink;
	}
</style>
