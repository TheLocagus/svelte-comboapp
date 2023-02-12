import { finishTimeValidation } from './addFormValidation';

export const msToDate = (timestamp: number) => {
	if (!timestamp) return '';
	const date = new Date(timestamp);
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();

	const padDay = String(day).padStart(2, '0');
	const padMonth = String(month).padStart(2, '0');
	const padYear = String(year).padStart(2, '0');
	console.log({ date, month, year, day });

	return `${padDay}-${padMonth}-${padYear}`;
};
