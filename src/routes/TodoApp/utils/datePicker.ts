export class DatePicker {
	now: number;
	actualDay: number;
	actualMonth: number;
	actualYear: number;
	daysToShow: string[];
	monthsToShow: string[];
	value: number;
	datePickerContainer: HTMLDivElement | null;
	datePickerHeader: HTMLDivElement | null;
	calendarSection: HTMLDivElement | null;
	arrowsDiv: HTMLDivElement | null;
	headerValueDiv: HTMLDivElement | null;
	confirmDiv: HTMLDivElement | null;
	confirmButton: HTMLButtonElement | null;

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
		this.arrowsDiv = null;
		this.headerValueDiv = null;
		this.confirmDiv = null;
		this.confirmButton = null;
		this.value = 0;
	}

	createCalendarTable() {
		this.calendarSection ? (this.calendarSection.innerHTML = '') : null;

		const table = document.createElement('table');
		table.classList.add('date-picker__table');
		// this.calendarSection?.appendChild(table);

		let tr = document.createElement('tr');
		tr.classList.add('date-picker__days-header');
		// table.appendChild(tr);

		this.daysToShow.forEach((day) => {
			const th = document.createElement('th');
			th.classList.add('date-picker__th');
			th.textContent = `${day}`;
			tr.appendChild(th);
		});
		table.appendChild(tr);

		const daysInMonth = new Date(this.actualYear, this.actualMonth + 1, 0).getDate();
		let firstMonthDay = new Date(this.actualYear, this.actualMonth, 1).getDay();
		console.log(this.actualMonth);
		if (firstMonthDay === 0) {
			firstMonthDay = 7;
		}
		const allRows = daysInMonth + firstMonthDay - 1;

		if (firstMonthDay - 1 !== 0) {
			tr = document.createElement('tr');
			table.appendChild(tr);
		}

		for (let i = 0; i < firstMonthDay - 1; i++) {
			const td = document.createElement('td');
			td.innerHTML = '';
			tr.appendChild(td);
		}

		for (let i = firstMonthDay - 1; i < allRows; i++) {
			if (i % 7 === 0) {
				tr = document.createElement('tr');
				table.appendChild(tr);
			}
			const td = document.createElement('td');
			td.innerText = (i - firstMonthDay + 2).toString();
			td.dayNr = i - firstMonthDay + 2;
			td.classList.add('day');

			tr.appendChild(td);
		}
		table.appendChild(tr);
		this.calendarSection?.appendChild(table);
	}

	createDateText() {
		this.headerValueDiv
			? (this.headerValueDiv.textContent = `${this.monthsToShow[this.actualMonth]} ${
					this.actualYear
			  }`)
			: null;
	}

	createButtons() {
		const headerArrowLeft = document.createElement('p');
		headerArrowLeft.classList.add('date-picker__arrow-left');
		headerArrowLeft.textContent = '<';
		headerArrowLeft.addEventListener('click', (e) => {
			this.actualMonth--;
			if (this.actualMonth < 0) {
				this.actualMonth = 11;
				this.actualYear--;
			}
			this.createCalendarTable();
			this.createDateText();
		});
		this.arrowsDiv?.appendChild(headerArrowLeft);

		const headerArrowRight = document.createElement('p');
		headerArrowRight.classList.add('date-picker__arrow-right');
		headerArrowRight.textContent = '>';
		headerArrowRight.addEventListener('click', (e) => {
			this.actualMonth++;
			if (this.actualMonth > 11) {
				this.actualMonth = 0;
				this.actualYear++;
			}
			this.createCalendarTable();
			this.createDateText();
		});
		this.arrowsDiv?.appendChild(headerArrowRight);
	}

	bindTableDaysEvent() {
		this.datePickerContainer?.addEventListener('click', (e) => {
			if (
				(e.target as HTMLElement).tagName.toLowerCase() === 'td' &&
				(e.target as HTMLElement).classList.contains('day')
			) {
				const alreadyActive = document.querySelector('.day-active');
				if (alreadyActive) alreadyActive.classList.remove('day-active');
				this.value = 0;
				this.value = new Date(this.actualYear, this.actualMonth, e.target?.dayNr).getTime();
				(e.target as HTMLElement).classList.add('day-active');
			}
		});
	}

	getValue() {
		return this.value;
	}

	init() {
		const calendar = document.getElementById('calendar');
		this.datePickerContainer = document.createElement('div');
		this.datePickerContainer.classList.add('date-picker');
		calendar?.appendChild(this.datePickerContainer);
		this.datePickerHeader = document.createElement('div');
		this.datePickerHeader.classList.add('date-picker__header');
		this.datePickerContainer.appendChild(this.datePickerHeader);

		this.arrowsDiv = document.createElement('div');
		this.arrowsDiv.classList.add('date-picker__header__arrows');
		this.createButtons();

		this.headerValueDiv = document.createElement('div');
		this.headerValueDiv.classList.add('date-value');
		this.createDateText();

		this.datePickerHeader.appendChild(this.arrowsDiv);
		this.datePickerHeader.appendChild(this.headerValueDiv);

		this.calendarSection = document.createElement('div');
		this.calendarSection.classList.add('date-picker__calendar');
		this.datePickerContainer.appendChild(this.calendarSection);

		this.createCalendarTable();
		this.bindTableDaysEvent();
	}

	destroy() {
		// document.querySelector('.date-picker')?.remove();
	}
}
