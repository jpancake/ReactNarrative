import _ from 'lodash'

import { SET_NARRATIVE } from './types'

export function setNarrative(payload) {
	console.log(payload)
	let diagnosis
	if (payload.others)
		diagnosis = _.concat(payload.diagnoses, payload.others.split(','))

	const patient = {
		firstName: payload.firstName,
		lastName: payload.lastName,
		medicalRecordId: payload['medicalRecord#'],
		age: payload.age,
		gender: payload.gender,
		allergies: payload.allergies,
		socDate: payload.SOC,
		SNVFrequency: payload.SNVfrequency,
		referral: payload.referrals,
		diagnosis: payload.others ? diagnosis.sort() : payload.diagnoses,
		nuero: {
			LOC: payload.AAOx4 ? 'AAOx4' : payload.loc,
			pain: {
				location: payload.painLocation,
				scale: payload.painScale,
				level: payload.painLevel
			}
		},
		cardio: {
			heartrate: payload.heartrate,
			edema: payload.edema,
			vitalSigns: {
				temp: payload.temperature,
				pulse: payload.pulse,
				respiration: payload.respiration,
				bloodPressure: payload.bloodPressure,
				location: payload.location,
				position: payload.position
			}
		},
		'GI/GU': {
			diet: payload.diet,
			incontinence: {
				urine: payload.incontinence,
				bm: payload.BMIncontinence
			},
			tubes: []
		},
		skin: {
			periwnd: payload.skin,
			wound: [
				{
					location: payload.woundLocation,
					measurements: {
						length: payload.length,
						width: payload.width,
						depth: payload.depth
					},
					wndbed: payload.wndbed,
					treatment: payload.treatment
				}
			]
		}
	}
	return {
		type: SET_NARRATIVE,
		payload: patient
	}
}
