import React, { Component } from 'react'
import { TextField } from 'office-ui-fabric-react/lib/TextField'

const renderTextField = ({ input, label, type, meta: { touched, error, warning } }) => {
	return (
		<TextField
			label={label}
			{...input}
		/>
	)
}

export default renderTextField

