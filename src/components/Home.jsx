import React from 'react'
import Hero from './homepage/Hero'
import AboutPreview from './homepage/AboutPreview'
import MusicPreview from './homepage/MusicPreview'
import CreditsPreview from './homepage/CreditsPreview'
import ContactPreview from './homepage/ContactPreview'

export default function Home() {
    return (
        <div>
            <Hero />
            <AboutPreview />
            <MusicPreview />
            <CreditsPreview />
            <ContactPreview />
        </div>
    )
}
