import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// import NarrativeForm from 'Containers/NarrativeForm'
// import NarrativeMessage from 'Components/NarrativeMessage'
import WizardForm from 'Components/WizardForm'
import NarrativeMessage from 'Components/NarrativeMessage'

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="row flex-dir-column">
					<Route path="/narrative" component={NarrativeMessage} />
					<Route exact path="/" component={WizardForm} />
				</div>
			</BrowserRouter>
		)
	}
}

