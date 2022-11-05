<script lang="ts">
    export let todo;
</script>

<div class:hide={todo.isFailed} class:done={todo.isFinished} class="todo__confirm__check-mark">
    <img class:taskDone={todo.isFinished} src="/src/images/icons8-done.svg" alt="">
</div>


<style>
    .todo__confirm__check-mark {
        border-radius: 8px;
        position: relative;
        height: 23px;
        width: 23px;
        border: 2px solid deeppink;
        cursor: pointer;

    }

   img {
        display: none;
        height: 15px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    /*.done {*/
    /*    background-color: deeppink;*/
    /*}*/

    .taskDone {
        display: block;
    }
    .done {
        background-color: deeppink;
    }
    .hide {
        display: none;
    }

</style>