import React, { Component } from 'react'
import { Field } from 'redux-form'

export default class VitalSigns extends Component {
	render() {
		return (
			<fieldset className="fieldset">
				<legend>Vital Signs</legend>
				<div className="row">
					<div className="medium-4 columns">
						<label htmlFor="temperature">
							Temperature
							<Field
								component="input"
								type="Number"
								name="temperature"
								step="0.1"
							/>
						</label>
					</div>
					<div className="medium-4 columns">
						<label htmlFor="pulse">
							Pulse
							<Field
								component="input"
								type="Number"
								name="pulse"
								step="0.1"
							/>
						</label>
					</div>
					<div className="medium-4 columns">
						<label htmlFor="respiration">
							Respiration
							<Field
								component="input"
								type="Number"
								name="respiration"
							/>
						</label>
					</div>
				</div>
				<div className="row">
					<div className="medium-4 columns">
						<label htmlFor="bloodpressure">
							Blood Pressure
							<Field
								component="input"
								type="text"
								name="bloodPressure"
							/>
						</label>
					</div>
					<div className="medium-2 columns">
						<legend>Location</legend>
						<Field
							component="input"
							type="radio"
							name="location"
							value="left"
						/>
						<label htmlFor="location">Left</label>
						<Field
							component="input"
							type="radio"
							name="location"
							value="right"
						/>
						<label htmlFor="location">Right</label>
					</div>
					<div className="medium-4 columns">
						<legend>Position</legend>
						<Field
							component="input"
							type="radio"
							name="position"
							value="standing"
						/>
						<label htmlFor="location">Standing</label>
						<Field
							component="input"
							type="radio"
							name="position"
							value="sitting"
						/>
						<label htmlFor="location">Sitting</label>
						<Field
							component="input"
							type="radio"
							name="position"
							value="lying"
						/>
						<label htmlFor="location">Lying</label>
					</div>
				</div>
			</fieldset>
		)
	}
}

