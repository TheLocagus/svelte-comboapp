<script lang="ts">

    import Button from "../../../components/Button.svelte";

    export let todo;
    export let setColorPrio;
    export let showDetails;
    export let showEdit;
    export let showRemove
</script>

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
        <Button type="button" onClick="{() => showDetails(todo.id)}" text="Details" className="todo-button"/>
        <Button type="button" onClick="{() => showEdit(todo.id)}" text="Edit" className="todo-button"/>
        <Button type="button" onClick="{() => showRemove(todo.id)}" text="Remove" className="todo-button"/>
    </div>
</div>

<style>

    .todo {
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