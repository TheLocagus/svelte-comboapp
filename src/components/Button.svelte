<script lang="ts">
  export let href = null;
  export let url = null;
  export let type = null;
  export let onClick = null;
  export let text = null;
  export let className = null;
</script>

{#if !href}
    <button type="{type}" class="{className}" on:click={onClick}>{text}</button>
{:else}
    <a class="{className}" href="{url}">{text}</a>
{/if}

<style>
    .todo-button {
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

    .todo-button:hover {
        background-color: orangered;
        border: 1px solid black;
    }

    .add-todo {
        padding: 15px 70px;
        background-color: orangered;
        border: 1px solid orangered;
        color: #030303;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
    }

    .add-todo:hover {
        background-color: #de7249;
        border: 1px solid orangered;
    }

    .footer-modal-button {
        height: 2.5rem;
        width: 5.5rem;
        margin: 0 0 0 10px;
        background-color: white;
        border: 1px solid black;
        border-radius: 5px;
        cursor: pointer;
    }

    .footer-modal-button:hover {
        background-color: black;
        color: white;
    }
</style>