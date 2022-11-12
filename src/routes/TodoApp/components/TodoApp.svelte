<script lang="ts">
  import {v4 as uuid} from 'uuid';
  import {todos} from '../store';
  import type {TodoInterface} from "../todo"
  import {ModalTypeEnum, PrioEnum, TodoTypeEnum} from "../types/todo";
  import Button from "../components/Button.svelte";
  import Modal from "../components/Modal.svelte";
  import {onMount} from "svelte";
  import FormTodo from "../components/FormTodo.svelte";
  import TodoCheck from "./TodoCheck.svelte";

  export let mode;

  let titleValue = '';
  let descriptionValue = '';
  let finishTimeValue = '';
  let prioValue = PrioEnum.medium;

  let tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000), day, month, year;

  let modalType = ModalTypeEnum.off;

  let idOfEdited = '';

  onMount(() => {
    parseFinishTimeValue();
  });

  const parseFinishTimeValue = () => {
    day = '' + tomorrow.getDate();
    month = '' + (tomorrow.getMonth() + 1);
    year = tomorrow.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    finishTimeValue = [year, month, day].join('-');
  }

  const clearModalData = () => {
    parseFinishTimeValue()
    titleValue = '';
    descriptionValue = '';
    finishTimeValue;
    prioValue = PrioEnum.medium;
  }

  const openAddModal = () => {
    modalType = ModalTypeEnum.add;
    clearModalData();
  }

  const closeModal = () => {
    modalType = ModalTypeEnum.off;
    clearModalData();
  }

  const showEdit = (id) => {
    modalType = ModalTypeEnum.edit;
    idOfEdited = id;

    const unsubscribe = todos.subscribe(items => {
      const {title, description, prio, finishTime} = items.find(item => item.id === id);
      titleValue = title;
      descriptionValue = description;
      finishTimeValue = (finishTime.replace('.', '-').replace('.', '-').split('-')).reverse().join('-');
      prioValue = prio;
    })
    unsubscribe();
  }
  const showDetails = () => {
    console.log('details')
  }
  const removeTodo = (id) => {
    todos.update((items) => {
      return items.filter(todo => todo.id !== id);
    })
  }

  const handleEditModal = (id) => {
    const oldValues = $todos.find(obj => obj.id === id);
    const newValues = {
      ...oldValues,
      title: titleValue,
      description: descriptionValue,
      finishTime: (finishTimeValue.replace('-', '.').replace('-', '.')).split('.').reverse().join('.'),
      prio: prioValue,
    }

    const newArray = $todos.map(item => {
      if(item.id === id){
        return newValues;
      } else return item;
    })

    todos.set(newArray);

    modalType = ModalTypeEnum.off;
    clearModalData();
  }

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
    todos.update(items => [...items, values])
    todos.subscribe(items => {
      console.log(items)
    })

    modalType = ModalTypeEnum.off;
  }


  const setColorPrio = (prio: PrioEnum) => {
    switch (prio) {
      case PrioEnum.low:
        return 'low-prio prio';
      case PrioEnum.medium:
        return 'medium-prio prio';
      case PrioEnum.hard:
        return 'hard-prio prio';
      case PrioEnum.extreme:
        return 'extreme-prio prio';
    }
  }

  const toggleFinished = (id: string) => {
    const updatedState = [...$todos].map(item => {
      if(item.id === id){
        item.isFinished = !item.isFinished;
        return item;
      } else return item;
    });
    todos.set(updatedState);
  }
</script>

<main>
    {#if modalType === 'add'}
        <Modal>
            <div slot="modal-content" class="modal-content">
                <FormTodo
                        bind:titleValue="{titleValue}"
                        bind:descriptionValue="{descriptionValue}"
                        bind:finishTimeValue="{finishTimeValue}"
                        bind:prioValue="{prioValue}"
                />
            </div>
            <div slot="modal-footer" class="modal-footer">
                <Button type="button" onClick="{closeModal}" text="Cancel" className="footer-modal-button"/>
                <Button type="button" onClick="{handleAddModal}" text="Add" className="footer-modal-button"/>
            </div>
        </Modal>
    {:else if modalType === 'edit'}
        <Modal>
            <div slot="modal-content" class="modal-content">
                <FormTodo
                        bind:titleValue="{titleValue}"
                        bind:descriptionValue="{descriptionValue}"
                        bind:finishTimeValue="{finishTimeValue}"
                        bind:prioValue="{prioValue}"
                />
            </div>
            <div slot="modal-footer" class="modal-footer">
                <Button type="button" onClick="{closeModal}" text="Cancel" className="footer-modal-button"/>
                <Button type="button" onClick="{() => handleEditModal(idOfEdited)}" text="Update"
                        className="footer-modal-button"/>
            </div>
        </Modal>
    {/if}
    <div class="todo-views-container">
        <Button className="todo-views-button" text="In progress" url="/todoapp/todo"
                toGlow="{mode === TodoTypeEnum.inProgress}"/>
        <Button className="todo-views-button" text="Done" url="/todoapp/done" toGlow="{mode === TodoTypeEnum.done}"/>
        <Button className="todo-views-button" text="Abandoned" url="/todoapp/abandoned"
                toGlow="{mode === TodoTypeEnum.abandoned}"/>
    </div>
    <TodoCheck
            {mode}
            {openAddModal}
            {setColorPrio}
            {showDetails}
            {showEdit}
            {removeTodo}
            {toggleFinished}
    />
</main>

<style>
    main {
        min-height: 101vh;
        width: 100%;
        background-color: #1a1a1a;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .modal-footer {
        height: 5rem;
        display: flex;
        align-items: center;
    }

    .todo-views-container {
        display: flex;
        justify-content: center;
        width: 100%;
    }
</style>