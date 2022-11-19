<script lang="ts">

  import Modal from "./Modal.svelte";
  import {type TodoInterface, PrioEnum} from "../types/todo";
  import {todos} from "../store";
  import Button from "./Button.svelte";
  import {onDestroy, onMount} from "svelte";
  import {v4 as uuid} from "uuid";
  export let isOpen;
  // export let titleValue;
  // export let descriptionValue;
  // export let finishTimeValue;
  // export let prioValue: PrioEnum;
  const closeModal = () => {
    isOpen = false;
  }
  let titleValue;
  let descriptionValue;
  let finishTimeValue;
  let prioValue: PrioEnum;

  onDestroy(() => {
    // parseFinishTimeValue()
    titleValue = '';
    descriptionValue = '';
    finishTimeValue = '';
    prioValue = PrioEnum.medium;
  })

  const handleAddModal = () => {
    const values: TodoInterface = {
      id: uuid(),
      title: titleValue,
      description: descriptionValue,
      initialTime: new Date().toLocaleDateString(),
      finishTime: (finishTimeValue.replace('-', '.').replace('-', '.')).split('.').reverse().join('.'),
      isFinished: false,
      prio: prioValue,
    }
    todos.update(items => [values, ...items])
    closeModal();
  }
</script>

<Modal>
    <div slot="modal-content" class="modal-content">
        <form class="modal-content__form">
            <label for="title">Title: </label>
            <input id="title" type="text" bind:value={titleValue}>
            <label for="desc">Description: </label>
            <textarea rows="8" id="desc" type="text" bind:value={descriptionValue}/>
            <label for="finishTime">Termin date: </label>
            <input id="finishTime" type="date" bind:value={finishTimeValue}>
            <label for="prio">Priority: </label>
            <select name="prio" id="prio" bind:value={prioValue}>
                <option value="{PrioEnum.low}">Low</option>
                <option value="{PrioEnum.medium}">Medium</option>
                <option value="{PrioEnum.hard}">Hard</option>
                <option value="{PrioEnum.extreme}">Extreme</option>
            </select>
        </form>
        <div class="modal-footer">
            <Button type="button" onClick="{closeModal}" text="Cancel" className="footer-modal-button"/>
            <Button type="button" onClick="{handleAddModal}" text="Add"
                    className="footer-modal-button"/>

        </div>
    </div>
</Modal>


<style>
    .modal-content__form {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 70%;
    }

    .modal-content__form label {
        margin: 10px 0 5px;
    }

    .modal-content__form input, textarea, select {
        outline: none;
        border: 1px solid black;
        padding: 10px 5px;
        font-size: 18px;
        border-radius: 5px;
        background-color: pink;
    }
</style>