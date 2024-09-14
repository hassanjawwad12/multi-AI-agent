import React from 'react'
import { getPartnerInfo } from '../../components/Partners/Info'
import PartnersPage from '../../components/PartnersPage'

export default function NeuralByte() {
    const partner = getPartnerInfo(2)
    return (
        <PartnersPage partner={partner} />
    )
}