<script lang="ts">
    export let fill;
    export let notVisible;
</script>


<div class="icon-container" class:fill class:notVisible>
    <slot></slot>
</div>

<style>

.icon-container{
    border-radius: 8px;
    position: relative;
    height: 23px;
    width: 23px;
    border: 2px solid deeppink;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.fill {
    background-color: deeppink;
}

.notVisible {
    display: none;
}

</style>