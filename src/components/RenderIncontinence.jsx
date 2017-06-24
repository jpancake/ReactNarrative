import React, { Component } from 'react'

const RenderIncontinence = props => {
	const { bm, urine } = props.incontinence
	const renderMessage = () => {
		let message
		if (bm === 'true' && urine === 'true')
			return 'Continent with BM/Urine.'
		if (bm === 'false' && urine === 'false')
			return 'Incontinent with BM/Urine.'

		if (bm === 'true')
			message = 'Continent with BM. '
		if (urine === 'true')
			message += 'Continent with Urine. '

		if (bm === 'false')
			message += 'Incontinent with BM. '
		if (urine === 'false')
			message += 'Incontinent with Urine. '

		return message
	}
	return <span>{renderMessage()}</span>
}

export default RenderIncontinence