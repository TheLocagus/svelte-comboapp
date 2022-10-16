<script>
    import TodoApp from "../components/TodoApp.svelte";
    import {TodoTypeEnum} from "../types/todo";
    import {mode} from "../store";
    import {onMount} from "svelte";

    let pageMode;

    onMount(() => {
        console.log()

        mode.set(TodoTypeEnum.inProgress);
        const unsubscribe = mode.subscribe(value => {
            pageMode = value;
        })
        unsubscribe();
    })
</script>

<TodoApp mode="{pageMode}"/>