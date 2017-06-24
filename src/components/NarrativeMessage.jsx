import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import RenderReferrals from './RenderReferals'
import RenderIncontinence from './RenderIncontinence'


@connect(state => ({ patient: state.patient }))
export default class NarrativeMessage extends Component {
	render() {
		if (_.isEmpty(this.props.patient))
			return (
				<Link to="/" className="button secondary">Back</Link>
			)

		const { medicalRecordId, lastName, firstName, socDate, SNVFrequency, history, diagnosis, referral, age, gender, allergies } = this.props.patient

		const { LOC, pain: { level, painLocation, scale },  } = this.props.patient.nuero

		const { heartrate, edema, vitalSigns: { temp, pulse, respiration, bloodPressure, location, position } } = this.props.patient.cardio

		const { diet, incontinence, tubes } = this.props.patient['GI/GU']

		return (
			<div>
				<p>{medicalRecordId} {lastName}, {firstName} <br />
					SOC SUMMARY <br />
					SOC Visit Date {socDate} <br />
					SN Visit Frequency - {SNVFrequency} <br />
				</p>
				<p>
					<RenderReferrals referrals={referral} />
				</p>
				<p>
					{age} {gender} {allergies} FULL CODE <br />
					Dx/Hx: {diagnosis ? diagnosis.join(', ') : ''}
					{LOC}, {painLocation ? `c/o ${painLocation} and ${scale}/10` : ''}, pain {level} <br />
					VSS and WNL T {temp}, HR {pulse}, RR {bloodPressure} <br />
					Respirations even/unlabored. Lungs clear bilateral. <br />
					<RenderIncontinence incontinence={incontinence} /> <br />
					Pt is on {diet}
				</p>

				<Link to="/" className="button secondary">Edit</Link>
			</div>
		)
	}
}

