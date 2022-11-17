<script>
    import EditIcon from "./EditIcon.svelte";
    export let click;
</script>

<div class="edit" on:click={click}>
    <EditIcon height="16px"/>
</div>

<style>
    .edit {
        cursor: pointer;
        margin: 0 5px;
    }

    .edit:hover :global(.edit-icon) {
        fill: deeppink;
    }
</style>