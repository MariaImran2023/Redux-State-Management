import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const amount = useSelector(state => state.amount) //selects the state you want to use. in this case our state is 'amount'. check in action-creators/index.js file

    return (
        <nav className="navbar navbar-expand-lg bg-body-dark">
          <div className="container-fluid">
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <li className="nav-item" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <h2 style={{ textAlign: "center" }}>Your Balance: {amount}</h2>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
}

export default Navbar
