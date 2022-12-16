<script lang="ts">
  import type { SelectDataType } from "./AddForm.svelte";

  export let id;
  export let value;
  export let title;
  export let selectData: SelectDataType;
</script>

  <label for={id}>{title}: </label>
  <select name={id} id={id} bind:value>
    {#each Object.entries(selectData) as [title, value]  }
      <option {value}>{title}</option>
    {/each}
  </select>

<style>

    label {
        margin: 10px 0 5px;
    }

    select {
        outline: none;
        border: 1px solid black;
        padding: 10px 5px;
        font-size: 18px;
        border-radius: 5px;
        background-color: pink;
    }
</style>