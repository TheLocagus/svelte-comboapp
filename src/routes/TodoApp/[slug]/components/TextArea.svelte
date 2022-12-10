<script lang="ts">
  export let value;
  export let id;
  export let rows = 8;

</script>

<label for={id}>Description: </label>
<textarea {rows} id={id} bind:value/>

<style>

    label {
        margin: 10px 0 5px;
    }

    textarea {
        outline: none;
        border: 1px solid black;
        padding: 10px 5px;
        font-size: 18px;
        border-radius: 5px;
        background-color: pink;
    }
</style>