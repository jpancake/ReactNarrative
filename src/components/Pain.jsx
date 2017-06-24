import React, { Component } from 'react'
import { render } from 'react-dom'
import { Field } from 'redux-form'

import PainSlider from 'Components/PainSlider'


export default class Pain extends Component {
	constructor(props) {
		super(props)
		this.onButtonClick = this.onButtonClick.bind(this)
	}
	renderPain() {
		return (
			<fieldset>
				<legend>Pain level</legend>
				<Field
					name="painLevel"
					component="input"
					type="radio"
					value="acceptable"
				/>
				<label> Acceptable/Tolerable</label>
				<Field
					name="painLevel"
					component="input"
					type="radio"
					value="medication"
				/>
				<label>Satisfied with Pain Medication</label>
			</fieldset>
		)
	}
	render() {
		return (
			<fieldset className="fieldset large-12 columns">
				<legend>Site #1</legend>
				<label htmlFor="">Location</label>
				<Field
					name="painLocation"
					component="input"
					type="text"
				/>
				<Field
					name="painScale"
					component={PainSlider}
					label="Pain Scale (0-10)"
				/>
				{this.renderPain()}
			</fieldset>
		)
	}
}

