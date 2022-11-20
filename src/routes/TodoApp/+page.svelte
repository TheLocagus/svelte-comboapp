<script>
    import {onMount} from "svelte";
    import {mode} from "./store.js";
    import {TodoTypeEnum} from "./types/todo.js";
    import TodoApp from "./components/TodoApp.svelte";

    let pageMode;

    onMount(() => {
        mode.set(TodoTypeEnum.inProgress);
        const unsubscribe = mode.subscribe(value => {
            pageMode = value;
        })
        unsubscribe();
    })

</script>

<TodoApp mode="{pageMode}"/>