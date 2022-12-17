<script lang="ts">

  import Modal from "./Modal.svelte";
  import {type TodoInterface, PrioEnum} from "../types/todo";
  import {todos} from "../store";
  import Button from "./Button.svelte";
  import {onDestroy} from "svelte";
  import {v4 as uuid} from "uuid";
  import {parseFinishTimeValue} from "../utils/parseFinishTime";
  import AddForm from "../[slug]/components/AddForm.svelte";
  import { finishTimeValidation, titleValidation } from "../[slug]/utils/addFormValidation";
  import {
      clearAddFormValidationMessages,
      finishDateValidationMessage,
      titleValidationMessage
  } from "../[slug]/store/AddForm";
  export let isOpen;

  const closeModal = () => {
    isOpen = false;
  }
  let titleValue = '';
  let descriptionValue = '';
  let finishTimeValue = parseFinishTimeValue();
  let prioValue: PrioEnum;

  onDestroy(() => {
    titleValue = '';
    descriptionValue = '';
    finishTimeValue = parseFinishTimeValue();
    prioValue = PrioEnum.medium;
    clearAddFormValidationMessages()
  })

  const handleAddModal = () => {
      clearAddFormValidationMessages();

    const values: TodoInterface = {
      id: uuid(),
      title: titleValue,
      description: descriptionValue,
      initialTime: new Date().toLocaleDateString(),
      finishTime: (finishTimeValue.replace('-', '.').replace('-', '.')).split('.').reverse().join('.'),
      isFinished: false,
      prio: prioValue,
    }

    titleValidation(titleValue);
    finishTimeValidation(Number(new Date(finishTimeValue).getTime()));

    if($titleValidationMessage || $finishDateValidationMessage) return;

    todos.update(items => [values, ...items])
    closeModal();
  }


</script>

<Modal title="Add task">
    <div class="modal-content">
        <AddForm
          bind:titleValue
          bind:descriptionValue
          bind:prioValue
          bind:finishTimeValue
          handleSubmit={handleAddModal}
        />

        <div class="modal-footer">
            <Button type="button" onClick="{closeModal}" text="Cancel" className="footer-modal-button"/>
            <Button type="submit" onClick="{handleAddModal}" text="Add"
                    className="footer-modal-button"/>

        </div>
    </div>
</Modal>


<style>


    .modal-footer {
        margin: 35px 0 20px;
    }
</style>