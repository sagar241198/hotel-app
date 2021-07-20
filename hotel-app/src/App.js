import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "jquery/dist/jquery"
import "bootstrap/dist/js/bootstrap";
import Navbar from './Container/Navbar';
import Home from './Container/Home';
import { Route } from 'react-router-dom';
import Hotel from './Container/Hotel';
import Login from './Container/Login';
import Resistration from './Container/Resistraion'
import YourBooking from './BookingForm/YourBooking';
import LogOut from './Container/LogOut';
import Error from './Container/ErrorPage';
import About from './Container/About'
import Service from './Container/Services'


function App() {
  return (
    <>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/ab@out.hotel_@plaza=about">
        <About />
      </Route>
      <Route path="/ab@out.hotel_Facility=Quality">
        <Service />
      </Route>
      <Route path="/User-signup">
        <Resistration />
      </Route>
      <Route path="/user_Login">
        <Login />
      </Route>
      <Route path="/hotel_@plaza=:suit">
        <Hotel />
      </Route>
      <Route path="/your-booking.hotel_@plaza=booking">
        <YourBooking />
      </Route>
      <Route path="/user_Logout">
        <LogOut />
      </Route>
      <Route path="/error_">
        <Error />
      </Route>
    </>
  );
}

export default App;
