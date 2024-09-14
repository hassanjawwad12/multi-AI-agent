import React from 'react'
import PartnersPage from '../../components/PartnersPage'
import { getPartnerInfo } from '../../components/Partners/Info'

export default function AIPulse() {
    const partner = getPartnerInfo(0)
    return (
        <PartnersPage partner={partner} />
    )
}
