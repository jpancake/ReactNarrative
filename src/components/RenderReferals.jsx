import React, { Component } from 'react'


const RenderReferrals = props => {
	const { referrals } = props
	if (!referrals)
		return <span></span>
	const renderReferral = () => {
		return referrals.map((referral) => {
			if (referral === 'PT')
				return <span>Referral for PT to eval/treat for strengthening/exercises <br /></span>
			if (referral === 'OT')
				return <span>Referral for OT to eval/treat for strengthening/exercises<br /></span>
			if (referral === 'ST')
				return <span>Referral for ST to eval/treat for swallow eval <br /></span>
			if (referral === 'HHA')
				return <span>Referral for HHA for bathing assistance/transferring/ADL care improvement teaching</span>
		})
	}
	return (
		<p>
			{renderReferral()}
		</p>
	)
}

export default RenderReferrals

