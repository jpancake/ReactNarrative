import React, { Component } from 'react'
import { Field } from 'redux-form'

export default class renderWounds extends Component {
	componentWillMount() {
		const { fields } = this.props
		if (!fields.length) fields.push({})
	}
	render() {
		const { fields, meta: { error, submitFailed } } = this.props
		return (
			<div>
				<div className="row">
					{fields.map((wound, index) => (
						<fieldset className="fieldset columns medium-6" key={index}>
							<legend>Wound #{index + 1}</legend>
							<label htmlFor="">location</label>
							<Field
								component="input"
								name={`${wound}.location`}
								type="text"
							/>
							<div className="row">
								<div className="columns medium-4">
									<label>
										Length
										<Field
											component="input"
											type="text"
											name="length"
										/>
									</label>
								</div>
								<div className="columns medium-4">
									<label>
										Width
										<Field
											component="input"
											type="text"
											name="width"
										/>
									</label>
								</div>
								<div className="columns medium-4">
									<label>
										Depth
										<Field
											component="input"
											type="text"
											name="Depth"
										/>
									</label>
								</div>
							</div>
							<label>
								Appearance
								<Field
									component="input"
									type="text"
									name="wndbed"
								/>
							</label>
							<label>
								<Field
									component="textarea"
									name="treatment"
								/>
							</label>
							<button
								className="button alert float-right"
								title="Remove Wound"
								onClick={() => fields.remove(index)}
							>
								Remove Wound
							</button>
						</fieldset>
					))}
				</div>
				<button
					type="button"
					onClick={() => fields.push({})}
					className="button primary">
					Add Wound
				</button>
			</div>
		)
	}
}