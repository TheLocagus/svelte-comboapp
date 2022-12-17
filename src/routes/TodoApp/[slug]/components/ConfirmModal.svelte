<script lang="ts">
import Modal from "../../components/Modal.svelte";
import Button from "../../components/Button.svelte";

export let removeTask;
export let hideConfirmModal;
export let taskTitle;
export let isConfirmModalOpen;
</script>

<Modal title={`Jesteś pewny, że chcesz usunąć zadanie ${taskTitle}?`  }>
  <div class="modal-info-wrapper">
  <div class="modal-info">
    <p>Potwierdzenie spowoduje nieodwracalne usunięcie elementu. Jeśli jesteś pewny, wybierz Ok.</p>
  </div>
  <div class="modal-actions">
    <div>
    <Button type="button" text="Ok" onClick={removeTask} />
    <Button type="button" text="Cancel" onClick={hideConfirmModal} />
      </div>
  </div>
  </div>

</Modal>

<style>

  .modal-info {
      margin-bottom: 10px;
      padding: 10px;
  }

  .modal-actions {
      /*background-color: deeppink;*/
  }

  .modal-actions>div {
      width: 30%;
      padding: 5px 0;
      margin: 0 5px;
      border-top: 1px solid pink;
  }
</style>