import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">{props.aboutText}</a>
              </li>
            </ul>
          </div>
          
          {/* <div className='d-flex'>
            <div className='bg-primary rounded mx-2' onClick={() => {props.toggleMode('primary')}} style={{height: '30px', width: '30px'}} ></div>
          </div> */}

          <div className={`form-check form-switch text-${props.mode==='light'? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </nav>
    </div>
  )
}
