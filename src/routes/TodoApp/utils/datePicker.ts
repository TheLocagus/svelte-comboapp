export class DatePicker {
	now: number;
	actualDay: number;
	actualMonth: number;
	actualYear: number;
	daysToShow: string[];
	monthsToShow: string[];
	datePickerContainer: HTMLDivElement | null;
	datePickerHeader: HTMLDivElement | null;
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
		this.datePickerHeader = null;
		this.calendarSection = null;
	}

	init() {
		this.datePickerContainer = document.createElement('div');
		this.datePickerContainer.classList.add('date-picker');
		document.body.appendChild(this.datePickerContainer);

		this.datePickerHeader = document.createElement('div');
		this.datePickerHeader.classList.add('date-picker__header');
		this.datePickerContainer.appendChild(this.datePickerHeader);

		const headerArrowLeft = document.createElement('p');
		headerArrowLeft.classList.add('date-picker__arrow-left');
		headerArrowLeft.textContent = '<';
		this.datePickerHeader.appendChild(headerArrowLeft);

		const headerValue = document.createElement('p');
		headerValue.classList.add('date-picker__header-value');
		headerValue.textContent = `${this.monthsToShow[this.actualMonth]} ${this.actualYear}`;
		this.datePickerHeader.appendChild(headerValue);

		const headerArrowRight = document.createElement('p');
		headerArrowRight.classList.add('date-picker__arrow-right');
		headerArrowRight.textContent = '>';
		this.datePickerHeader.appendChild(headerArrowRight);

		this.calendarSection = document.createElement('div');
		this.calendarSection.classList.add('date-picker__calendar');
		this.datePickerContainer.appendChild(this.calendarSection);

		const table = document.createElement('table');
		table.classList.add('date-picker__table');
		this.calendarSection.appendChild(table);

		const daysHeader = document.createElement('tr');
		daysHeader.classList.add('date-picker__days-header');
		table.appendChild(daysHeader);

		this.daysToShow.forEach((day) => {
			const th = document.createElement('th');
			th.classList.add('date-picker__th');
			th.textContent = `${day}`;
			daysHeader.appendChild(th);
		});
	}

	destroy() {
		// document.querySelector('.date-picker')?.remove();
	}
}
