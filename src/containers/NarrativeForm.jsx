import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

import * as actions from 'Actions'

import RenderDiagnosis from
	'Components/RenderDiagnosis'
import Neuro from 'Components/Neuro'
import Pain from 'Components/Pain'
import VitalSigns from 'Components/VitalSigns'
import Cardio from '../components/Cardio'
import GIGU from '../components/GIGU'
import Skin from '../components/Skin'


@reduxForm({
	form: 'SignupForm',
})
@connect(null, actions)
export default class NarrativeForm extends Component {
	constructor(props) {
		super(props)
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
		this.renderDatePicker = this.renderDatePicker.bind(this)
	}
	handleFormSubmit(formProps) {
		console.log(formProps)
		this.props.setNarrative(formProps)
	}
	renderField(field) {
		const { input, meta: { touched, error } } = field
		return (
			<div className={field.className}>
				<label htmlFor={field.label}>{field.label}</label>
				<input
					type={field.type}
					{...input}
				/>
			</div>
		)
	}
	renderDatePicker(field) {
		const { input } = field
		return (
			<div>
				<label htmlFor={field.label}>{field.label}</label>
				<DatePicker {...input} dateForm="MM/DD/YYYY" selected={input.value ? moment(input.value) : null}
				/>
			</div>
		)
	}
	renderCheckbox(field) {
		const { input } = field
		return (
			<div>
				<input
					type="checkbox"
					id={field.label}
					{...input}
				/>
				<label htmlFor={field.label}>{field.label}</label>
			</div>
		)
	}
	render() {
		const { handleSubmit } = this.props
		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit)}>
				<Field
					label="First Name"
					name="firstName"
					type="text"
					component={this.renderField}
				/>
				<Field
					label="Last Name"
					name="lastName"
					type="text"
					component={this.renderField}
				/>
				<Field
					label="MR#"
					name="medicalRecordNumber"
					type="text"
					component={this.renderField}
				/>
				<Field
					label="Age"
					name="age"
					type="number"
					component={this.renderField}
				/>
				<div>
					<fieldset className="large-6 columns">
						<legend>Sex</legend>
						<div className="row">
							<label>
								<Field name="sex" component="input" type="radio" value="male" />
								{' '}
								Male
							</label>
							<label>
								<Field name="sex" component="input" type="radio" value="female" />
								{' '}
								Female
							</label>
						</div>
					</fieldset>
				</div>
				<Field
					label="Allergies"
					name="allergies"
					type="text"
					component={this.renderField}
				/>
				<Field
					label="SOC Visit Date"
					name="socDate"
					component={this.renderDatePicker}
				/>
				<Field
					label="SN Visit Frequency"
					name="SNV"
					type="text"
					component={this.renderField}
				/>
				<fieldset className="large-6 columns">
					<legend>Referrals</legend>
					<div className="row">
						<Field
							label="PT"
							name="physicalTherapy"
							component={this.renderCheckbox}
						/>
						<Field
							label="OT"
							name="occupationalTherapy"
							component={this.renderCheckbox}
						/>
						<Field
							label="ST"
							name="speechTherapy"
							component={this.renderCheckbox}
						/>
						<Field
							label="HHA"
							name="hhaTherapy"
							component={this.renderCheckbox}
						/>
					</div>
				</fieldset>
				<RenderDiagnosis />
				<Neuro renderCheckbox={this.renderCheckbox} renderField={this.renderField}        />
				<Pain renderField={this.renderField} />
				<VitalSigns />
				<Cardio />
				<GIGU />
				<Skin />
				<button className="button primary" action="submit">Submit</button>
			</form>
		)
	}
}

