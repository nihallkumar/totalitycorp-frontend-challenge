import React from 'react'

function Navbar() {

  const handleClick = () => {
    const selectElement = (element) => document.querySelector(element);
    selectElement('header').classList.toggle('active');

  }

  return (
    <>
      <header>
        <div className="container">
          <div className="nav">

            <ul className="nav-list nav-list-mobile">
              <li className="nav-item">
                <div onClick={handleClick} className="mobile-menu">
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
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar