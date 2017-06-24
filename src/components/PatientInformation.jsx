import React from 'react'
import { Field, reduxForm } from 'redux-form'
import DatePicker from './DatePicker'
import CheckboxGroup from './CheckboxGroup'
import { TextField } from 'office-ui-fabric-react/lib/TextField'
import renderTextField from 'Components/renderTextField'

const PatientInformation = props => {
	const { handleSubmit } = props
	const referralOptions = ['PT', 'OT', 'ST', 'HHA']
	return (
		<form onSubmit={handleSubmit}>
			<fieldset className="fieldset">
				<legend>Patient Information</legend>
				<div className="row">
					<div className="columns medium-6">
						<Field
							name="firstName"
							type="text"
							label="First Name"
							component="input"
						/>
					</div>
					<div className="columns medium-6">
						<Field
							name="lastName"
							label="Last Name"
							type="text"
							component="input"
						/>
					</div>
				</div>
				<div className="row">
					<div className="columns medium-6">
						<label htmlFor="medical-record">MR#</label>
						<Field
							name="medicalRecord#"
							type="text"
							component="input"
						/>
					</div>
					<div className="columns medium-6">
						<label htmlFor="age">Age</label>
						<Field
							name="age"
							type="text"
							component="input"
						/>
					</div>
				</div>
				<div className="row">
					<div className="columns medium-6">
						<label htmlFor="gender">Gender</label>
						<Field
							name="gender"
							component="select"
						>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</Field>
					</div>
					<div className="columns medium-6">
						<fieldset className="columns medium-12">
							<legend>Referrals</legend>
							<Field
								name="referrals"
								options={referralOptions}
								component={CheckboxGroup}
							/>
						</fieldset>
					</div>
				</div>
				<div className="row">
					<div className="columns medium-6">
						<label htmlFor="SOC">SOC Date</label>
						<Field
							name="SOC"
							type="text"
							component={DatePicker}
						/>
					</div>
					<div className="columns medium-6">
						<label htmlFor="frequency">SNV Frequency</label>
						<Field
							name="SNVfrequency"
							type="text"
							component="input"
						/>
					</div>
				</div>
				<div className="row">
					<div className="columns medium-6">
						<label htmlFor="allergies">Allergies</label>
						<Field
							name="allergies"
							type="textarea"
							component="textarea"
						/>
					</div>
				</div>
			</fieldset>
			{props.renderButtons()}
		</form>
	)
}

export default reduxForm({
	form: 'Wizard',
	destroyOnUnmount: false,
	forceUnregisterOnUnmount: true,
})(PatientInformation)
