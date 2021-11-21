

const NavBar = () => {
    return (
      <nav class='navbar navbar-expand-lg navbar navbar-dark bg-dark '>
        <div class='container-fluid'>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarNav'>
            <ul class='navbar-nav'>
              <li class='nav-item'>
                <a class='nav-link active' aria-current='page' href='/'>
                  Home
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#About'>
                  About
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#Schedule'>
                  Schedule
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#Speakers'>
                  Speakers
                </a>
              </li>
              <li class='nav-item'>
                <button
                  type='button'
                  class='btn btn-light '
                  style={{ margin: "0 15px" }}
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
