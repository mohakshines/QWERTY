import React from 'react';

export default function Header(){
    return(
        <>
      <header className="main-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
          <div className="container">
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-menu"
                aria-controls="navbars-rs-food"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="index.html">
                <img src="images/logo.png" className="logo" alt="" />
              </a>
            </div>

            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul
                className="nav navbar-nav ml-auto"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li className="nav-item active">
                  
                    <a className="nav-link">Home</a>
                  
                </li>
                <li className="nav-item">
                  
                    <a href="/about" className="nav-link">About Us</a>
                  
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle arrow"
                    data-toggle="dropdown"
                  >
                    SHOP
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      
                        <a>Cart</a>
                     
                    </li>
                    <li>
                      
                        <a>Checkout</a>
                     
                    </li>
                    <li>
                      
                        <a>My Account</a>
                      
                    </li>
                    <li>
                     
                        <a>Wishlist</a>
                      
                    </li>
                    <li>
                      <a href="shop-detail.html">Shop Detail</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  
                    <a className="nav-link">Our Service</a>
                  
                </li>
                <li className="nav-item">
                  
                    <a className="nav-link">Contact Us</a>
                  
                </li>
              </ul>
            </div>

            <div className="attr-nav">
              <ul>
                <li className="side-menu">
                  
                    <a>
                      <i className="fa fa-shopping-bag"></i>
                    </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
