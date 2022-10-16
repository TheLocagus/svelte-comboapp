<script lang="ts">
  import {v4 as uuid} from 'uuid';
  import {todos} from './store';
  import type {TodoInterface} from "../../types/todo"
  import {ModalTypeEnum, PrioEnum} from "../../types/todo";
  import Button from "../../components/Button.svelte";
  import Modal from "../../components/Modal.svelte";
  import {onMount} from "svelte";
  import FormTodo from "../../components/FormTodo.svelte";
  import Todo from "./components/Todo.svelte";

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
    todos.update(items => {
      return items.map(item => {
        console.log(item, id)
        if(item.id === id){
          console.log(item)
          return {
            ...item,
            title: titleValue,
            description: descriptionValue,
            finishTime: (finishTimeValue.replace('-', '.').replace('-', '.')).split('.').reverse().join('.'),
            prio: prioValue,
          }
        }
        return item;
      })
    });

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
                    <Button type="button" onClick="{() => handleEditModal(idOfEdited)}" text="Update" className="footer-modal-button"/>
                </div>
            </Modal>
        {/if}
    <div class="todo-views-container">
        <Button className="todo-views-button active" text="In progress" url="/in-progress" />
        <Button className="todo-views-button" text="Done" url="/done"/>
        <Button className="todo-views-button" text="Aborted" url="/aborted"/>
    </div>
    <div class="add-todo-container">
        <Button className="add-todo" type="button" text="Add TODO" onClick="{openAddModal}"/>
    </div>
    <div class="todo-container">
        {#each $todos as todo, i (todo.id)}
            {#if !todo.isFinished}
                <Todo
                        todo="{todo}"
                        setColorPrio="{setColorPrio}"
                        showDetails="{showDetails}"
                        showEdit="{showEdit}"
                        showRemove="{removeTodo}"
                />
            {/if}
        {/each}
    </div>
</main>

<style>
    main {
        min-height: 100vh;
        width: 100%;
        background-color: #111;
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

    .todo-views-container {
        display: flex;
        justify-content: center;
        width: 100%;
    }

</style>