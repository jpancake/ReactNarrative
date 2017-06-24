import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import CheckboxGroup from 'Components/CheckboxGroup'

const diagnosis = ['No diseases/conditions', 'Alcoholism', 'Alzheimers', 'Anemia', 'Anxiety', 'Arthrtis-Osteo', 'Arthritis-Rheumatoid', 'Asthma', 'Bipolar Disorder', 'CAD', 'Cancer', 'CHF', 'COPD', 'CVA', 'Dementia', 'Depression', 'Diabetes', 'DJD', 'Drug Abuse', 'Emphysema', 'Falls', 'Fractures', 'GERD', 'Heart Disease', 'Hepatitis', 'Hiatal Hernia', 'HIV Exposure', 'Hypercholesterolemia', 'Hyperglycemia', 'Hyperlipedemia', 'Hypertension', 'Hyperthyroid', 'Hypoglycemia', 'Hypothyroid', 'Immunosuppression', 'Mental/Emotional Disorder', 'Myocardial Infarction (MI)', 'Neuromuscular Disorder', 'Obese', 'Parkinsons', 'Peripheral Neuropathy', 'Pneumonia', 'PVD', 'Renal Failure', 'Schizophrenia', 'Seizures', 'Tuberculosis', 'Ulcers', 'UTI(s)', 'BPH', 'End Stage Renal Disease']

const MedicalHistory = props => {
	const { handleSubmit } = props
	return (
		<form onSubmit={handleSubmit}>
			<fieldset className="medium-12 columns fieldset">
				<legend>Medical History</legend>
				<Field
					name="diagnoses"
					component={CheckboxGroup}
					options={diagnosis.sort()}
				/>
				<div className="columns medium-6">
					<label htmlFor="others">Other</label>
					<Field
						name="others"
						component="textarea"
					/>
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
})(MedicalHistory)

