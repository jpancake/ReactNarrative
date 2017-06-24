import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import RadioGroup from 'Components/RadioGroup'

const options = ['Regular Diet', 'Cardiac Diet', 'Renal Diet', 'Diabetic Diet']

const GIGU = props => {
	const { handleSubmit } = props
	return (
		<form onSubmit={handleSubmit}>
			<fieldset className="fieldset">
				<legend>GI/GU</legend>
				<div className="row">
					<div className="columns medium-6">
						<legend>Diet</legend>
						<RadioGroup name="diet" options={options} />
					</div>
					<div className="columns medium-6">
						<legend>Incontinent with BM</legend>
						<div className="row">
							<div className="columns medium-6">
								<Field
									component="input"
									type="radio"
									name="BMIncontinence"
									value="true"
									id="trueBM"
								/>
								<label htmlFor="trueBM">True</label>
							</div>
							<div className="columns medium-6">
								<Field
									component="input"
									type="radio"
									name="BMIncontinence"
									value="false"
									id="falseBM"
								/>
								<label htmlFor="falseBM">False</label>
							</div>
						</div>
						<legend>Incontinent with Urine</legend>
						<div className="row">
							<div className="columns medium-6">
								<Field
									component="input"
									type="radio"
									name="incontinence"
									value="true"
									id="trueUI"
								/>
								<label htmlFor="trueUI">True</label>
							</div>
							<div className="columns medium-6">
								<Field
									component="input"
									type="radio"
									name="incontinence"
									value="false"
									id="falseUI"
								/>
								<label htmlFor="falseUI">False</label>
							</div>
						</div>
					</div>
				</div>
				<legend>Tubes</legend>
				<div className="row">
					<div className="columns medium-6">
						<div className="row">
							<div className="columns medium-6">
								<Field
									component="input"
									type="checkbox"
									name="gtube"
									id="gtube"
								/>
								<label htmlFor="gtube">Gastric tube</label>
							</div>
							<div className="columns medium-6">
								<Field
									component="input"
									type="checkbox"
									name="catheter"
									id="catheter"
								/>
								<label htmlFor="catheter">Catheter</label>
							</div>
						</div>
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
})(GIGU)

