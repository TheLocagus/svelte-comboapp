<script lang="ts">
    export let todo;
</script>

<div>
    <img class:taskDone={todo.isFinished} src="/src/images/icons8-done.svg" alt="">
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