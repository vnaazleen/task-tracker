import { Link } from 'react-router-dom';
import axios from 'axios'

function Navbar(props) {

  var user = props.user;

  function LogOut() {
    axios.get("http://localhost:3500/logout")
    .then((res) => { console.log(res) })
    localStorage.clear();
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">ToDoApp</a>
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