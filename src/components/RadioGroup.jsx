import React, { Component } from 'react'
import { Field } from 'redux-form'

class RadioGroup extends Component {
	radioBoxGroup() {
		const { options } = this.props
		return options.map((option, index) => {
			return (
				<div className="columns medium-6" key={index}>
					<label>
						<Field
							component="input"
							type="radio"
							name={this.props.name}
							value={option}
						/>
						{option}
					</label>
				</div>
			)
		})
	}
	render() {
		return (
			<div className="row">
				{this.radioBoxGroup()}
			</div>
		)
	}
}

export default RadioGroup

