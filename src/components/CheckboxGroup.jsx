import React from 'react'

class CheckboxGroup extends React.Component {

	checkboxGroup() {
		let {label, required, options, input, meta} = this.props

		return options.map((option, index) => {
			return (
				<div className="columns medium-3" key={index}>
					<label>
						<input type="checkbox"
						       name={`${input.name}[${index}]`}
						       value={option}
						       checked={input.value.indexOf(option) !== -1}
						       onChange={(event) => {
							       const newValue = [...input.value]
							       if (event.target.checked)
								       newValue.push(option)
							        else
								       newValue.splice(newValue.indexOf(option), 1)


							       return input.onChange(newValue)
						       }}/>
						{option}
					</label>
				</div>
			)
		})
	}

	render() {
		return (
			<div className="row">
				{this.checkboxGroup()}
			</div>
		)
	}
}


export default CheckboxGroup

