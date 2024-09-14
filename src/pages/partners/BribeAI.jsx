import React from 'react'
import { getPartnerInfo } from '../../components/Partners/Info'
import PartnersPage from '../../components/PartnersPage'

export default function BribeAI() {
    const partner = getPartnerInfo(1)
    return (
        <PartnersPage partner={partner} />
    )
}