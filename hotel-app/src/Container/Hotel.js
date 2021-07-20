import React from 'react';
import { useParams } from 'react-router-dom';
import Booking from '../BookingForm/Booking';
import { RoomApi } from '../Api/RoomApi'
import { useState } from 'react';
import More from './More'
import Footer from './Footer'

const Hotel = () => {
    const prams = useParams();
    const [show, setShow] = useState(false);
    const ShowMore = () => {
        setShow(!show);
    }
    return (
        <>
            <div className="card container my-4 shadow " >
                <Booking />
            </div>
            <div className="container my-3 shadow">
                <div className="row">
                    {
                        RoomApi.map((room, index) => {
                            if (room.RoomeName === prams.suit) {
                                return (
                                    <div className="card p-2 col-sm-6 mr-2" style={{ width: "20rem" }}>
                                        <img className="card-img-top" src={room.img} />
                                    </div>
                                )
                            }
                        })
                    }
                    <div class="card col-sm-6" style={{ width: "18rem" }} >
                        <div class="card-body">
                            <h6 class="card-title text-success">{prams.suit}</h6>
                            <hr />
                            <div className="text-warning">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <div style={{ float: "right", marginTop: "90px" }}>
                                <button class="btn  mb-0" onClick={ShowMore}>More <i class="fas fa-sort"></i></button></div>
                        </div>
                    </div>
                    {
                        RoomApi.map((room, index) => {
                            if (room.RoomeName === prams.suit) {
                                return (
                                    <>
                                        <div class="card col-sm-6" style={{ width: "30rem" }} >
                                            <div class="card-body">
                                                <h6 class="card-title text-danger">Prices/Amounts</h6>
                                                <hr />
                                                <p className="text-success">Single  Bed :
                                                  <b className="text-warning">
                                                    <i class="fas fa-rupee-sign"></i>{room.single} /-</b>
                                                </p>
                                                <p className="text-success">Double Bed :
                                                  <b className="text-warning">
                                                    <i class="fas fa-rupee-sign"></i>{room.double} /-</b>
                                                </p>
                                                <p className="text-success">Triple Bed :
                                                  <b className="text-warning">
                                                    <i class="fas fa-rupee-sign"></i>{room.triple} /-</b>
                                                </p>
                                                <p className="text-success">Four   Bed   :
                                                  <b className="text-warning">
                                                    <i class="fas fa-rupee-sign"></i>{room.quadBed} /-</b>
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        })
                    }
                </div>
                <div >
                    <More value={show} />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Hotel;