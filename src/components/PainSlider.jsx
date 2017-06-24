import React, { Component } from 'react'
import Slider from 'react-rangeslider'

import 'react-rangeslider/lib/index.css'

export default class PainSlider extends Component {
	constructor(props) {
		super(props)
		this.state = { pain: 0 }
		this.onSliderChange = this.onSliderChange.bind(this)
	}
	onSliderChange(value) {
		this.setState({ pain: value })
	}
	render() {
		const { input, label } = this.props
		return (
			<div>
				<label>
					{label}
					<Slider
						value={this.state.pain}
						min={0}
						max={10}
						step={1}
						onChange={this.onSliderChange}
						{...input}
					/>
				</label>
			</div>
		)
	}
}

