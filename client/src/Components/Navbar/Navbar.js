import { Link } from 'react-router-dom';
import axios from 'axios'

import './Navbar.css'

function Navbar(props) {

  var user = props.user;

  function LogOut() {
    axios.get("http://localhost:3500/logout")
    .then((res) => { console.log(res) })
    localStorage.clear();
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img className="logo" src="https://user-images.githubusercontent.com/54474853/161590324-353708d7-094f-426b-aa5f-3c740395b4a8.png" alt="Task Manager"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>

            {

              !user

              ?

              <>
                <li className="nav-item">
                  <a className="nav-link" href="/login">Login</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/register">Register</a>
                </li>
              </>

              :

              <li className="nav-item">
                  <a className="nav-link" href="/" onClick={LogOut}>Logout</a>
              </li>

            }

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar