

const NavBar = ({
  scrollToRef,
  headerRef,
  infoRef,
  speakerRef,
  scheduleRef,
}) => {
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
              <div
                className='nav-link active'
                aria-current='page'
                onClick={() => scrollToRef(headerRef)}
              >
                Home
              </div>
            </li>
            <li className='nav-item'>
              <div className='nav-link' onClick={() => scrollToRef(infoRef)}>
                About
              </div>
            </li>
            <li className='nav-item'>
              <div
                className='nav-link'
                onClick={() => scrollToRef(scheduleRef)}
              >
                Schedule
              </div>
            </li>
            <li className='nav-item'>
              <div className='nav-link' onClick={() => scrollToRef(speakerRef)}>
                Speakers
              </div>
            </li>
            <li className='nav-item'>
              <button type='button' className='btn btn-light register-btn'>
                Register
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar
