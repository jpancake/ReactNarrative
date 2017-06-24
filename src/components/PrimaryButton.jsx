import React, { Component } from 'react'
import { PrimaryButton, IButtonProps } from 'office-ui-fabric-react/lib/Button'

export default class Button extends Component<IButtonProps, {}> {
	render() {
		return (
			<PrimaryButton
				text={this.props.text}
				onClick={this.props.onClick}
			/>
		)
	}
}

