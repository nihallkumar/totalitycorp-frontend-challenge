import React from 'react'

function Unit(props) {
  const {titleHead, titleSubHead, price}=props;
  const {main,title,titleHeading,ctaLink}=props;
  return (
    <>
      <div className={main}>
        <div className="container">
          <div className={title}>
            <h2 className={titleHeading}>{titleHead}</h2>
            <h3 className="title-sub-heading">{titleSubHead}</h3>
            <p className="title-price">{price}</p>
          </div>
          <div className="cta">
            <a href="#" className={ctaLink}>Learn more</a>
            <a href="#" className={ctaLink}>Buy</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Unit