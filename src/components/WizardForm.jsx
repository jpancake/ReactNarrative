import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import PatientInformation from 'Components/PatientInformation'
import MedicalHistory from 'Components/MedicalHistory'
import Nuero from 'Components/Neuro'
import Cardio from 'Components/Cardio'
import GIGU from 'Components/GIGU'
import Skin from 'Components/Skin'
import * as actions from 'actions'

@connect(null, actions)
export default class WizardForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			page: 1,
		}
	}
	onSubmit(values) {
		this.props.setNarrative(values)
		this.props.history.push('/narrative')
	}
	nextPage() {
		this.setState({ page: this.state.page + 1 })
	}

	previousPage() {
		this.setState({ page: this.state.page - 1 })
	}
	renderButtons() {
		switch (this.state.page) {
		case 1:
			return (
				<div className="buttons">
					<button type="submit" title="nextPage" className="button primary">Next</button>
				</div>
			)
		case 6:
			return (
				<div className="buttons">
					<button type="button" className="button secondary" onClick={::this.previousPage}>Previous</button>
					<button type="submit" title="nextPage" className="button primary">Submit</button>
				</div>
			)
		default:
			return (
				<div className="buttons">
					<button type="button" className="button secondary" onClick={::this.previousPage}>Previous</button>
					<button type="submit" title="nextPage" className="button primary">Next</button>
				</div>
			)
		}
	}
	render() {
		const { page } = this.state
		return (
			<div>
				{page === 1 && <PatientInformation
					renderButtons={::this.renderButtons}
					onSubmit={::this.nextPage}
				/>}
				{page === 2 && <MedicalHistory
					renderButtons={::this.renderButtons}
					onSubmit={::this.nextPage}
				/>}
				{page === 3 && <Nuero
					renderButtons={::this.renderButtons}
					onSubmit={::this.nextPage} /> }
				{page === 4 && <Cardio
					renderButtons={::this.renderButtons}
					onSubmit={::this.nextPage} />}
				{page === 5 && <GIGU
					renderButtons={::this.renderButtons}
					onSubmit={::this.nextPage} />}
				{page === 6 && <Skin
					renderButtons={::this.renderButtons}
					onSubmit={::this.onSubmit} />}
			</div>
		)
	}
}
