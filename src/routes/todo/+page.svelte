<script lang="ts">
  import {v4 as uuid} from 'uuid';
  import {todos} from './store';
  import {PrioEnum} from "../../types/todo";
  import type {TodoInterface} from "../../types/todo"
  import Button from "../../components/Button.svelte";
  import Modal from "../../components/Modal.svelte";
  import {onMount} from "svelte";
  import FormTodo from "../../components/FormTodo.svelte";
  import Todo from "./components/Todo.svelte";

  let isModalOpen = false;
  let titleValue = '';
  let descriptionValue = '';
  let finishTimeValue = '';
  let prioValue = PrioEnum.medium;

  let tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000), day, month, year;

  onMount(() => {
    day = '' + tomorrow.getDate();
    month = '' + (tomorrow.getMonth() + 1);
    year = tomorrow.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    finishTimeValue = [year, month, day].join('-');
  })
  const openModal = () => {
    isModalOpen = true;
  }

  const closeModal = () => {
    isModalOpen = false;
    console.log(titleValue)
  }

  const showEdit = (id) => {
    console.log('edit', id)
  }
  const showDetails = () => {
    console.log('details')
  }
  const showRemove = () => {
    console.log('remove')
  }

  const handleAddTodo = () => {
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
</script>

<main>
    {#if isModalOpen}
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
                <Button type="button" onClick="{handleAddTodo}" text="Add" className="footer-modal-button"/>
            </div>
        </Modal>
    {/if}
    <div class="add-todo-container">
        <Button className="add-todo" type="button" text="Add TODO" onClick="{openModal}"/>
    </div>
    <div class="todo-container">
        {#each $todos as todo, i (todo.id)}
            {#if !todo.isFinished}
                <Todo
                        todo="{todo}"
                        setColorPrio="{setColorPrio}"
                        showDetails="{showDetails}"
                        showEdit="{showEdit}"
                        showRemove="{showRemove}"
                />
            {/if}
        {/each}
    </div>
</main>

<style>
    main {
        min-height: 100vh;
        width: 100%;
        background-color: #030303;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .add-todo-container {
        height: 100%;
        width: 100%;
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .todo-container {
        flex-basis: 80%;
        margin: 0 auto;
        height: 100%;
        width: 70%;
        flex-grow: 3;
    }

    .modal-footer {
        height: 5rem;
        display: flex;
        align-items: center;
    }

</style>