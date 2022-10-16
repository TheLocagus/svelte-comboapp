<script lang="ts">
  import TodoApp from "../components/TodoApp.svelte";
  import {onMount} from "svelte";
  import {mode} from "../store";
  import {TodoTypeEnum} from "../types/todo";

  let pageMode;

    onMount(() => {

      mode.set(TodoTypeEnum.done);
      const unsubscribe = mode.subscribe(value => {
        pageMode = value;
      })
      unsubscribe();
    })
</script>

<TodoApp mode={pageMode}/>