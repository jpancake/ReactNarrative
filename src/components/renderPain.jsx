import React, { Component } from 'react'
import { Field } from 'redux-form'
import PainSlider from 'Components/PainSlider'

export default class renderPain extends Component {
	componentWillMount() {
		const { fields } = this.props
		if (!fields.length) fields.push({})
	}
	render() {
		const { fields, meta: { error, submitFailed } } = this.props
		return (
			<div>
				<div className="row">
					{fields.map((site, index) => (
						<fieldset className="fieldset columns medium-6" key={index}>
							<legend>Pain Site #{index + 1}</legend>
							<label htmlFor="">Location</label>
							<Field
								name={`${site}.location`}
								type="text"
								component="input"
							/>
							<Field
								name={`${site}.scale`}
								component={PainSlider}
								label="Pain Scale (0-10)"
							/>
							<fieldset>
								<legend>Pain level</legend>
								<Field
									name={`${site}.level`}
									component="input"
									type="radio"
									value="acceptable"
								/>
								<label> Acceptable/Tolerable</label>
								<Field
									name={`${site}.level`}
									component="input"
									type="radio"
									value="medication"
								/>
								<label>Satisfied with Pain Medication</label>
							</fieldset>
							<input
								type="button"
								value="Remove Site"
								className="button alert float-right"
								onClick={() => fields.remove(index)}
							/>
						</fieldset>
					))}
				</div>
				<div className="flex-container align-right">
					<button
						type="button"
						onClick={() => fields.push({})}
						className="button primary">
						Add Pain Site
					</button>
				</div>
			</div>
		)
	}
}

