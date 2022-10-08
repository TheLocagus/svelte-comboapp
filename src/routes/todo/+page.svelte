<script lang="ts">
  import {todos} from './store';
  import {PrioEnum} from "../../types/todo.js";

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
        <button class="add-todo">Add TODO</button>
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

                        <button>Details</button>
                        <button>Edit</button>
                        <button>Remove</button>

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

    .add-todo-container button {
        padding: 15px 70px;
        background-color: orangered;
        border: 1px solid orangered;
        color: #030303;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
    }

    .add-todo-container button:hover {
        background-color: #de7249;
        border: 1px solid orangered;
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

    .todo__buttons button {
        width: 70px;
        margin: 1px 0;
        padding: 2px 5px;
        font-size: 12px;
        background-color: #de7249;
        border: 1px solid black;
        border-radius: 5px;
        color: #444;
        cursor: pointer;
    }

    .todo__buttons button:hover {
        background-color: orangered;
        border: 1px solid black;
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