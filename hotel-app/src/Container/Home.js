import { Carousel } from 'react-bootstrap';
import img3 from '../image/img3.jpg'
import img4 from '../image/img4.jpeg'
import hotel from '../image/Luxury-Hotels.jpg';
import { RoomApi } from '../Api/RoomApi';
import Booking from '../BookingForm/Booking'
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';

const Home = () => {

    // const url ="hotel";
    console.log(RoomApi);
    return (
        <>
            <div className="container" style={{marginTop:"100px"}} >

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={hotel}
                            style={{ height: "500px" }}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            style={{ height: "500px" }}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img4}
                            style={{ height: "500px" }}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className="container my-4 ">
                    <h3 className="text-center" style={{ color: "#04204e" }}>Rooms</h3>
                    <hr />
                    <div className=" d-flex flex-wrap p-2 my-4">
                        {
                            RoomApi.map((room, index) => {
                                var url = `/hotel_@plaza=${room.RoomeName}`;
                                return (
                                    <NavLink className="text-dark" to={url}>
                                        <div class="card p-1 " style={{ width: "13rem" }}>
                                            <img class="card-img-top" src={room.img} alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">{room.RoomeName}</h5>
                                            </div>
                                        </div>
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                </div>

                <Booking />
                <h3 className="text-center my-3"> Services</h3>
                <hr />
                <div className="d-flex flex-wrap bg text-white p-2">
                    <div className=" Card mr-2 border-right" style={{ width: "17rem" }}>
                        <h5 className="text-center"><i class="fas fa-person-booth"></i> Room Service</h5>
                        <p className="text-center"> We provided  24-hour Room service on a basis.</p>
                    </div>
                    <div className=" Card mr-2 border-right" style={{ width: "17rem" }}>
                        <h5 className="text-center"><i class="fa fa-car" aria-hidden="true"></i> Parking</h5>
                        <p className="text-center">
                            Visitors to Plaza must park their vehicles in the designated parking area.
                            Hotel guests please park in the marked spaces at the hotel resort which are reserved for you.
                        </p>
                    </div>
                    <div className=" Card mr-2 border-right" style={{ width: "17rem" }}>
                        <h5 className="text-center"><i class="fas fa-spa"></i> Spa</h5>
                        <p className="text-center"> We Have special room for Spa where Visitors can take rest and enjoy the Spa.
                            We provide Two  Times in a Day Morning and Evening Free Of Cost </p>
                    </div>
                    <div className=" Card mr-2" style={{ width: "17rem" }}>
                        <h5 className="text-center"><i class="fas fa-utensils"></i> Food</h5>
                        <p className="text-center">
                            We Provide Free Breakfast to Our Visitors On basis of thier Room-Suits
                        </p>
                    </div>
                </div>

            </div>
            <div className="container ReviewPage">
                <Reviews />
            </div>
            <Footer />
        </>
    )
}

export default Home;