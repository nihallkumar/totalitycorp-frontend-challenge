import React from 'react'
// import "./main";


function Navbar() {
  return (
    <>
      <header>
        <div className="container">
          <div className="nav">

            <ul className="nav-list nav-list-mobile">
              <li className="nav-item">
                <div className="mobile-menu">
                  <span className="line line-top"></span>
                  <span className="line line-bottom"></span>
                </div>
              </li>
              <li className="nav-item">
                <a href="#" className='nav-link nav-link-apple'></a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link-bag"></a>
              </li>
            </ul>


            <ul className="nav-list nav-list-larger">
              <li className="nav-item nav-item-hidden">
                <a href="#" className='nav-link nav-link-apple'></a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link">Store</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link">Mac</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link">iPad</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link">iPhone</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link">Watch</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link">AirPods</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link">TV & Home</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link">Only on Apple</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link">Accessories</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link">Support</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link-search"></a>
              </li>
              <li className="nav-item nav-item-hidden">
                <a href="#" className="nav-link nav-link-bag"></a>
              </li>
            </ul>

            {/* <ul className='navlist'>
        <li className='list'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-apple" viewBox="0 0 16 16">
            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
          </svg>
        </li>
        <li className='list'>Store</li>
        <li className='list'>Mac</li>
        <li className='list'>iPad</li>
        <li className='list'>iPhone</li>
        <li className='list'>Watch</li>
        <li className='list'>AirPods</li>
        <li className='list'>TV & Home</li>
        <li className='list'>Only on Apple</li>
        <li className='list'>Accessories</li>
        <li className='list'>Support</li>
        <li className='list'>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </li>
        <li className='list'>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
        </li>
      </ul> */}

          </div>
        </div>
      </header>

      {/* <Unit main="hero iphone-11-pro" title="title" titleHeading="title-heading" ctaLink="cta-link" titleHead="iPhone 11 pro" titleSubHead="procam pro display pro performance" price="From $99 per month or $555" /> */}

      {/* <section className='hero iphone-11-pro'>
        <div className="container">
          <div className="title">
            <h2 className="title-heading">iPhone 11 pro</h2>
            <h3 className="title-sub-heading">procam pro display pro performance</h3>
            <p className="title-price">From $99 per month or $555</p>
          </div>
          <div className="cta">
            <a href="#" className="cta-link">Learn more</a>
            <a href="#" className="cta-link">Buy</a>
          </div>
        </div>
      </section> */}

      {/* <section className='hero iphone-11'>
        <div className="container">
          <div className="title title-dark">
            <h2 className="title-heading">iPhone 11 pro</h2>
            <h3 className="title-sub-heading">procam pro display</h3>
            <p className="title-price">From $99</p>
          </div>
          <div className="cta">
            <a href="#" className="cta-link cta-link-darker">learn more</a>
            <a href="#" className="cta-link cta-link-darker">Buy</a>
          </div>
        </div>
      </section> */}


      {/* <Unit main="hero iphone-11" title="title title-dark" titleHeading="title-heading" ctaLink="cta-link cta-link-darker" titleHead="iPhone 11" titleSubHead="pro camera pro display" price="From $99 per month or $555" />

      <Unit main="hero watch" title="title title-dark" titleHeading="title-heading-watch" ctaLink="cta-link cta-link-darker" titleHead="" titleSubHead={`with the new display ${<br />} never seen a watch like this` }price="" /> */}

      {/* <section className='hero watch'>
        <div className="container">
          <div className="title title-dark">
            <h2 className="title-heading-watch"></h2>
            <h3 className="title-sub-heading">with the new display <br />
              never seen a watch like this</h3>
          </div>
          <div className="cta">
            <a href="#" className="cta-link cta-link-darker">learn more</a>
            <a href="#" className="cta-link cta-link-darker">Buy</a>
          </div>
        </div>
      </section> */}

    </>
  )
}

export default Navbar