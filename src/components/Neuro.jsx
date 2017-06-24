import React, { Component } from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import Pain from 'pain'
import renderPain from 'components/renderPain'

const Neuro = props => {
	const { handleSubmit } = props
	return (
		<form onSubmit={handleSubmit}>
			<fieldset className="large-12 columns fieldset">
				<legend>Neuro</legend>
				<div className="flex-container">
					<Field
						name="AAOx4"
						type="checkbox"
						component="input"
					/>
					<label htmlFor="alert">AAOx4</label>
					<label htmlFor="otherN">Other</label>
					<Field
						name="loc"
						component="input"
						type="text"
					/>
				</div>
				<FieldArray name="sites" component={renderPain} />
			</fieldset>
			{props.renderButtons()}
		</form>
	)
}

export default reduxForm({
	form: 'Wizard',
	destroyOnUnmount: false,
	forceUnregisterOnUnmount: true,
})(Neuro)

