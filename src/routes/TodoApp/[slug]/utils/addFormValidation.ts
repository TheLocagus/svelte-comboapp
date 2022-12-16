import { finishDateValidationMessage, titleValidationMessage } from "../store/AddForm";

export const titleValidation = (value: string) => {
  value = value.trim();
  if(!value) {
    titleValidationMessage.set('Pole nie może być puste')
  } else {
    titleValidationMessage.set('')
  }
}

export const finishTimeValidation = (value: number) => {
  if(value <= new Date().getTime()) {
    finishDateValidationMessage.set('Nie można wybrać czasu z przeszłości')
  } else {
    finishDateValidationMessage.set('')
  }
}