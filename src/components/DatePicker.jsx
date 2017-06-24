import React from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const DatePickerField = (field) => {
	const { input } = field
	return (
		<div>
			<label htmlFor={field.label}>{field.label}</label>
			<DatePicker {...input} dateForm="MM/DD/YYYY" selected={input.value ? moment(input.value) : null}
			/>
		</div>
	)
}

export default DatePickerField

