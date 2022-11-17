<script lang="ts">
import RemoveIcon from "./RemoveIcon.svelte";
export let click;
</script>

<div class="remove" on:click={click}>
    <RemoveIcon height="16px"/>
</div>


<style>
    .remove {
        cursor: pointer;
        margin: 0 5px;
    }

    .remove:hover :global(.remove-icon){
        fill: deeppink;
    }
</style>
