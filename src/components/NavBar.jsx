

const NavBar = () => {
    return (
      <nav className='navbar navbar-expand-lg navbar navbar-dark bg-dark '>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#home'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#About'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#Schedule'>
                  Schedule
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#Speakers'>
                  Speakers
                </a>
              </li>
              <li className='nav-item'>
                <button
                  type='button'
                  className='btn btn-light register-btn'
                  
                >
                  Register
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default NavBar
