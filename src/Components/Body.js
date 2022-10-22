import React from 'react'
import Unit from './Unit'

function Body() {
    return (
        <>
            <Unit main="hero iphone-11-pro" title="title" titleHeading="title-heading" ctaLink="cta-link" titleHead="iPad" titleSubHead="Lovable. Drawable. Magical." price="Available starting 10.26" />

            <Unit main="hero iphone-11" title="title title-dark" titleHeading="title-heading" ctaLink="cta-link cta-link-darker" titleHead="iPhone 11" titleSubHead="pro camera pro display" price="From $99 per month or $555" />

            <Unit main="hero iphone-11" title="title title-dark" titleHeading="title-heading" ctaLink="cta-link cta-link-darker" titleHead="iPhone 11" titleSubHead="pro camera pro display" price="From $99 per month or $555" />

            <Unit main="hero watch" title="title title-dark" titleHeading="title-heading-watch" ctaLink="cta-link cta-link-darker" titleHead="" titleSubHead={`with the new display ${<br />} never seen a watch like this`} price="" />

        </>
    )
}

export default Body