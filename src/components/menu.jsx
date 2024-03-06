import "./menu.css";
const Menu = () => {
  return (
    <>
      <div className="container">
        <nav>
          <ul className="mcd-menu">
            <li>
              <a href="">
                <i className="fa fa-home"></i>
                <strong>Home</strong>
                <small>Home Page</small>
              </a>
            </li>

            <li>
              <a href="">
                <i className="fa fa-gift"></i>
                <strong>Prescription</strong>
                <small>Prices of Medicines on different Websites</small>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-globe"></i>
                <strong>Appointment</strong>
                <small>Book Appointments</small>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-comments-o"></i>
                <strong>Features</strong>
                <small>Please Hover for more options</small>
              </a>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-globe"></i>Ambulance Enquiry
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-group"></i>Choose your Medical Center
                  </a>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-female"></i>Private Hospitals
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-male"></i>Government Hospitals
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-leaf"></i>About
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-tasks"></i>Rating
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-female"></i>Clinics
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-trophy"></i>On Call Consultancy
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-certificate"></i>Specialists
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">
                <i className="fa fa-picture-o"></i>
                <strong>Comparison</strong>
                <small>Compare different hospitals in your area</small>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-envelope-o"></i>
                <strong>Waiting Lists</strong>
                <small>Shows hospitals with the lowest wait time</small>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-edit"></i>
                <strong>About us</strong>
                <small>Find out about us</small>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu;
