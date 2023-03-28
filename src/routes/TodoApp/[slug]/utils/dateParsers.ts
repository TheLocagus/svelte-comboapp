export const msToDate = (timestamp: number) => {
	if (!timestamp) return '';
	const date = new Date(timestamp);
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hours = date.getHours();
	const minutes = date.getMinutes();

	const padDay = String(day).padStart(2, '0');
	const padMonth = String(month).padStart(2, '0');
	const padYear = String(year).padStart(2, '0');
	const padHours = String(hours).padStart(2, '0');
	const padMinutes = String(minutes).padStart(2, '0');

	return `${padDay}-${padMonth}-${padYear} ${padHours}:${padMinutes}`;
};
