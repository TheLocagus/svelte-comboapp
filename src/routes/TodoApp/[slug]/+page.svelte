<script lang="ts">
    import TodoApp from "../components/TodoApp.svelte";
    import type {PageData} from "./$types";

    export let data: PageData;
</script>

<TodoApp mode="{data.glow}"/>