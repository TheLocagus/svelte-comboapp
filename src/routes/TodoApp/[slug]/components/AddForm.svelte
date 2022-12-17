<script lang="ts">
  import { PrioEnum } from "../../types/todo.js";
  import Input from "./Input.svelte";
  import TextArea from "./TextArea.svelte";
  import Select from "./Select.svelte";
  import { titleValidationMessage } from "../store/AddForm";
  import { finishTimeValidation, titleValidation } from "../utils/addFormValidation.js";
  import { finishDateValidationMessage } from "../store/AddForm.js";

  export type SelectDataType = Record<string, PrioEnum>

  // export let formData;
  export let titleValue;
  export let descriptionValue;
  export let finishTimeValue;
  export let prioValue;
  export let handleSubmit

  const selectData: SelectDataType = {
    Low: PrioEnum.low,
    Medium: PrioEnum.medium,
    Hard: PrioEnum.hard,
    Extreme: PrioEnum.extreme,
  }


</script>

<form on:submit|preventDefault={handleSubmit} class="modal-content__form">
  <Input
    id="title"
    type="text"
    bind:value={titleValue}
    title="Title"
    validateMethod={() => titleValidation(titleValue)}
    validateMessage={titleValidationMessage}
  />
  <TextArea
    id="desc"
    bind:value={descriptionValue}
  />
  <Input
    id="finishTime"
    type="date"
    bind:value={finishTimeValue}
    title="Termin date"
    validateMethod={() => finishTimeValidation(new Date(finishTimeValue).getTime())}
    validateMessage={finishDateValidationMessage}
  />
  <Select
    id="prio"
    title="Priority"
    bind:value={prioValue}
    {selectData}
  />
</form>

<style>
    .modal-content__form {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 70%;
    }

</style>