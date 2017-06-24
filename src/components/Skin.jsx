import React, { Component } from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'

import CheckboxGroup from './CheckboxGroup'
import renderWounds from 'Components/renderWounds'

const options = ['Dry', 'Intact', 'Warm']

const Skin = props => {
	const { handleSubmit } = props
	return (
		<form onSubmit={handleSubmit}>
			<fieldset className="fieldset">
				<legend>Skin</legend>
				<div className="row">
					<div className="medium-12 columns">
						<fieldset className="fieldset">
							<legend>Assessment</legend>
							<Field
								component={CheckboxGroup}
								name="skin"
								options={options}
							/>
						</fieldset>
					</div>
				</div>
				<FieldArray name="wounds" component={renderWounds} />
			</fieldset>
			{props.renderButtons()}
		</form>
	)
}
export default reduxForm({
	form: 'Wizard',
	destroyOnUnmount: false,
	forceUnregisterOnUnmount: true,
})(Skin)

