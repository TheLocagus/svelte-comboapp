<script lang="ts">
  export let id;
  export let type;
  export let value;
  export let title;
  export let validateMethod;
  export let validateMessage;

  const setType = (node) => {
    node.type = type;
  }

</script>

{#if type === 'date'}
  <label for={id}>{title}: </label>
  {#if $validateMessage}
    <span>{$validateMessage}</span>
  {/if}
  <input on:change={validateMethod} id={id} use:setType bind:value class:validate-error={$validateMessage} />
{:else}
  <label for={id}>{title}: </label>
  {#if $validateMessage}
    <span>{$validateMessage}</span>
  {/if}
  <input on:focusout={validateMethod} id={id} use:setType bind:value class:validate-error={$validateMessage} />
{/if}



<style>
    label {
        margin: 10px 0 5px;
    }

    input {
        outline: none;
        border: 1px solid black;
        padding: 10px 5px;
        font-size: 18px;
        border-radius: 5px;
        background-color: pink;
    }

    .validate-error {
        border: 1px solid red;
    }

    span {
        margin-left: 10px;
        font-size: 0.8rem;
        color: #8d0707;
        font-weight: bold;
    }
</style>