import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import VitalSigns from 'Components/VitalSigns'
import RadioGroup from 'Components/RadioGroup'

const Cardio = props => {
	const options = ['Regular', 'Ireegular', 'Strong', 'Rapid', 'Weak', 'Absent', 'Thready']

	const { handleSubmit } = props
	return (
		<form onSubmit={handleSubmit}>
			<fieldset className="fieldset">
				<legend>Cardio</legend>
				<div className="row">
					<div className="columns medium-6">
						<legend>Heartrate/Rhythm</legend>
						<RadioGroup name="heartrate" options={options} />
					</div>

					<div className="columns medium-6">
						<legend>Edema</legend>
						<Field
							component="input"
							type="radio"
							name="edema"
							value="pitting"
							id="pitting"
						/>
						<label htmlFor="pitting">pitting</label>
						<Field
							component="input"
							type="radio"
							name="edema"
							value="nonpitting"
							id="nonpitting"
						/>
						<label htmlFor="nonpitting">non-pitting</label>
						<Field
							component="input"
							type="radio"
							name="edema"
							value="none"
							id="none"
						/>
						<label htmlFor="none">none</label>
					</div>
				</div>
				<VitalSigns />
			</fieldset>
			{props.renderButtons()}
		</form>
	)
}

export default reduxForm({
	form: 'Wizard',
	destroyOnUnmount: false,
	forceUnregisterOnUnmount: true,
})(Cardio)

