<script lang="ts">
    export let isFinished;
</script>

<div>
    <img class:taskDone={isFinished} src="/src/images/icons8-done.svg" alt="">
</div>


<style>

   img {
        display: none;
        height: 15px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .taskDone {
        display: block;
    }

</style>