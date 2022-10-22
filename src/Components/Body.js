import React from 'react'
import Unit from './Unit'

function Body() {
    return (
        <>
            <Unit main="hero ipad" isabsolute={true} title="title" titleHeading="title-heading" ctaLink="cta-link" titleHead="iPad" titleSubHead="Lovable. Drawable. Magical." price="Available starting 10.26" />

            <Unit main="hero iphone-14-pro" title="title title-dark" titleHeading="title-heading" ctaLink="cta-link cta-link-darker" titleHead="iPhone 14 Pro" titleSubHead="Pro.Beyond." price="" />

            <Unit main="hero iphone-14" title="title" titleHeading="title-heading" ctaLink="cta-link" titleHead="iPhone 14" titleSubHead="Big and Bigger." price="" />

            <div className="wrapper">
                <div className="one"></div>
                <div className="one"></div>
            </div>

            {/* <Unit main="hero watch" title="title title-dark" titleHeading="title-heading-watch" ctaLink="cta-link cta-link-darker" titleHead="" titleSubHead={`with the new display ${<br />} never seen a watch like this`} price="" /> */}

        </>
    )
}

export default Body