<script>
    import EditIcon from "./EditIcon.svelte";
</script>

<div class="edit">
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