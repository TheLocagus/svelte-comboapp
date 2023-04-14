export const finishTimeValidation = (value: number) =>
	value <= new Date(Date.now()).setSeconds(0, 0);
