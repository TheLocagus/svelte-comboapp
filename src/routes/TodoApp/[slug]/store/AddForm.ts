import { writable } from "svelte/store";

export const titleValidationMessage = writable('');
export const descriptionValidationMessage = writable('');
export const finishDateValidationMessage = writable('');

export const clearAddFormValidationMessages = () => {
  titleValidationMessage.set('');
  descriptionValidationMessage.set('');
  finishDateValidationMessage.set('');

}


