<script lang="ts">

import RemoveIcon from "./RemoveIcon.svelte";
</script>

<div class="remove">
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
