<script lang="ts">
  import {todos} from './store';
  import {PrioEnum} from "../../types/todo.js";
  import Button from "../../components/Button.svelte";

  const showEdit = (id) => {
    console.log('edit', id)
  }
  const showDetails = () => {
    console.log('details')
  }
  const showRemove = () => {
    console.log('remove')
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
    <div class="add-todo-container">
        <Button className="add-todo" type="button" text="Add TODO"/>
    </div>
    <div class="todo-container">
        {#each $todos as todo, i (todo.id)}
            {#if !todo.isFinished}
                <div class="todo">
                    <div class="todo__prio">
                        <div class={setColorPrio(todo.prio)}></div>
                    </div>
                    <div class="todo__title">
                        <div class="title">{todo.title}</div>
                    </div>
                    <div class="todo__time">
                        <div class="time">{todo.initialTime} - {todo.finishTime}</div>
                    </div>
                    <div class="todo__buttons">
                        <Button type="button" onClick="{showDetails}" text="Details" className="todo-button" />
                        <Button type="button" onClick="{() => showEdit(todo.id)}" text="Edit" className="todo-button"/>
                        <Button type="button" onClick="{showRemove}" text="Remove" className="todo-button"/>
                    </div>
                </div>
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

    .todo-container .todo {
        margin: 2px 0;
        text-align: center;
        display: flex;
        align-items: center;
        padding: 20px 0;
        background-color: #de7249;
        border-radius: 5px;
    }

    .todo__prio {
        flex-basis: 5%;
        display: flex;
        justify-content: center;
    }

    .prio {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: yellow;
    }

    .todo__title {
        flex-basis: 40%;
    }

    .todo__time {
        flex-basis: 45%;
    }

    .todo__buttons {
        flex-basis: 10%;
        display: flex;
        flex-direction: column;
    }

    .low-prio {
        background-color: yellowgreen;
    }

    .medium-prio {
        background-color: yellow;
    }

    .hard-prio {
        background-color: darkred;
    }

    .extreme-prio {
        background-color: black;
    }
</style>