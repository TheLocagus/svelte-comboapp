<script lang="ts">
    import {onMount} from "svelte";
    import {PrioEnum} from "../types/todo.js";

    export let titleValue = '';
    export let descriptionValue = '';
    export let finishTimeValue = '';
    export let prioValue = '';


</script>

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