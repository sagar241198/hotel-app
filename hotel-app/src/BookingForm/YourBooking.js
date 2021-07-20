import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import CancelBooking from './CancelBooking';

const YourBooking = () => {
    const history = useHistory();
    const [Data, setData] = useState([]);
    const BookingInfo = async () => {
        try {
            const res = await fetch('/Booking_info', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Credential: "include"
                }
            })
            const data = await res.json();
            if (res.status == 400 || !data) {
                console.log('sroorryy no data to show ')
            } else {
                setData(data);
            }
        } catch (err) {
            history.push('/error_');
        }
    }
    useEffect(() => {
        console.log('you are into useEffect')
        BookingInfo();
    }, [])

    if (Data.length === 0) {
        return (
            <>
                <div className="container bg-warning text-white my-4 w-50 ">
                    <h4>Your Booking</h4>
                </div>
                <div className="container bg-dark text-white  w-50 text-center " style={{ marginTop: "200px" }}>
                    <h2>You have no Booking to Show !</h2>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="container bg-warning text-white my-4 w-50 ">
                    <h4>Your Booking</h4>
                </div>
                {
                    Data.map((BookData, index) => {
                        return (
                            <div className="container shadow w-50">
                                <div class="card " >
                                    <header className="bg-dark text-white p-2"><h6>Booking_Id #{BookData.user} </h6></header>
                                    <div class="card-body d-flex flex-wrap ">
                                        <div className="w-50">
                                            <div className="text-center"><b >Room Details</b>
                                                <hr />
                                                <div className="">RoomSuit :<small className="text-dark ">{BookData.RoomSuit}</small></div>
                                                <div className="">No.of Beds :<small className="text-dark ">{BookData.Bed}</small></div>
                                                <div className="">CheckIn:<small className="text-dark ">{BookData.CheckIn}</small></div>
                                                <div className="">CheckOut:<small className="text-dark ">{BookData.CheckOut}</small></div>
                                            </div>
                                        </div>
                                        <div className="w-50">
                                            <div className="text-center"><b >Client Details </b>
                                                <hr />
                                                <div >Name :<small>{BookData.name}</small></div>
                                                <div >Email :<small>{BookData.email}</small></div>
                                                <div >Number :<small>{BookData.number}</small></div>
                                                <CancelBooking id={BookData._id} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-2" />
                            </div>
                        )
                    })
                }
            </>
        )
    }
}
export default YourBooking;