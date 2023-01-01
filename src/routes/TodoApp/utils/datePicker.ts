import type { init } from 'svelte/internal';

export class DatePicker {
	now: number;
	actualDay: number;
	actualMonth: number;
	actualYear: number;
	daysToShow: string[];
	monthsToShow: string[];
	datePickerContainer: HTMLDivElement | null;
	monthSection: HTMLDivElement | null;
	calendarSection: HTMLDivElement | null;

	constructor() {
		this.now = new Date().getTime();
		this.actualDay = new Date(this.now).getDay();
		this.actualMonth = new Date(this.now).getMonth();
		this.actualYear = new Date(this.now).getFullYear();

		this.daysToShow = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
		this.monthsToShow = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];
		this.datePickerContainer = null;
		this.monthSection = null;
		this.calendarSection = null;
	}

	init() {
		this.datePickerContainer = document.createElement('div');
		this.datePickerContainer.classList.add('date-picker');
		document.body.appendChild(this.datePickerContainer);

		this.monthSection = document.createElement('div');
		this.monthSection.classList.add('date-picker__month');

		this.calendarSection = document.createElement('div');
		this.calendarSection.classList.add('date-picker__calendar');
	}

	destroy() {
		document.querySelector('.date-picker')?.remove();
	}
}
