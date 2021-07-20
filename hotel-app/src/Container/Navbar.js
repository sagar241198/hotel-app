import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    var Login = localStorage.getItem('userLogin');
    const [state, setstate] = useState(Login);
    if (state != null) {
        return (
            <div className=" w-100 " >
                <nav className="navbar navbar-expand-sm navbar-dark  bg"  >
                    <div className="container ">
                        <NavLink className="navbar-brand text-white " to="/">Hotel Plaza</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item active">
                                    <NavLink className="nav-link " to="/"><i class="fa fa-home" aria-hidden="true"></i> Home </NavLink>
                                </li>
                                <li class="nav-item ">
                                    <NavLink className="nav-link " to="/ab@out.hotel_@plaza=about"><i class="fa fa-ban" aria-hidden="true"></i> About Us </NavLink>
                                </li>
                                <li class="nav-item ">
                                    <NavLink className="nav-link " to="/your-booking.hotel_@plaza=booking"><i class="fas fa-hotel"></i> Booking </NavLink>
                                </li>
                                <li class="nav-item ">
                                    <NavLink className="nav-link " to="/user_Logout"><i class="fas fa-sign-out-alt"></i> LogOut </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    } else {
        return (
            <div className="  w-100  " >
                <nav className=" navbar navbar-expand-sm navbar-dark  bg"  >
                    <div className="container ">
                        <NavLink className="navbar-brand text-white " to="/">Hotel Plaza</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse " id="navbarNav" aria-expanded="false" >
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item active">
                                    <NavLink className="nav-link " to="/"><i class="fa fa-home" aria-hidden="true"></i> Home </NavLink>
                                </li>
                                <li class="nav-item ">
                                    <NavLink className="nav-link " to="/ab@out.hotel_@plaza=about"><i class="fa fa-ban" aria-hidden="true"></i> About Us </NavLink>
                                </li>
                                <li class="nav-item ">
                                    <NavLink className="nav-link " to="/user_Login"><i class="fas fa-sign-in-alt"></i> SignIn </NavLink>
                                </li>
                                <li class="nav-item ">
                                    <NavLink className="nav-link " to="/User-signup"><i class="fas fa-user-plus"></i> Sighup </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;