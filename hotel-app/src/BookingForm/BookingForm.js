import React, { useState } from 'react';
import { RoomApi } from '../Api/RoomApi';
import { useHistory } from 'react-router-dom'

const BookingForm = (props) => {
    const [Data, setData] = useState({ name: "", email: "", number: "", RoomSuit: "", Bed: "", CheckIn: "", CheckOut: "" });
    const [errname, seterrname] = useState("");
    const [erremail, seterremail] = useState("");
    const [errNumber, seterrNumber] = useState("");
    const history = useHistory();
    let name;
    let value;
    function handleInput(e) {
        name = e.target.name;
        value = e.target.value;
        setData({
            ...Data, [name]: value,
            RoomSuit: props.value.RoomSuit,
            Bed: props.value.Bed,
            CheckIn: props.value.CheckIn,
            CheckOut: props.value.CheckOut
        });
    }

    function isValidate() {
        const { name, email, number, RoomSuit, Bed, CheckIn, CheckOut } = Data;
        if (name == "" || name.length < 3) {
            seterrname("name must caontain minimun 3 charecter*");
            return true;
        } else if (email == "" || !email.endsWith("@gmail.com")) {
            seterrname("");
            seterremail("plz type valiedEmail*");
            return true;
        }
        else if (number == "" || number.length != 10) {
            seterremail("")
            seterrNumber("Number should be of 10 character long*");
            return true;
        } else {
            seterrNumber("");
            return false;
        }
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();

        try {

            const isTrue = isValidate();
            if (!isTrue) {
                const { name, email, number, RoomSuit, Bed, CheckIn, CheckOut } = Data;
                const res = await fetch('/booking', {

                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        httpOnly: true,
                        Credential: "include"
                    },
                    body: JSON.stringify({ name, email, number, RoomSuit, Bed, CheckIn, CheckOut })
                });
                const data = await res.json();
                if (res.status === 400 || !data) {
                    alert("Authorization is required");
                    history.push('/user_Login')
                } else if (res.status === 401 || !data) {
                    alert("pllz login or create an account to Booking");
                    history.push('/user_Login')
                }
                else {
                    alert("your Booking is confirm pls check your mail or msg");
                    console.log(data);
                }
            }

        } catch (err) {
            history.push('/error_');
        }

    }

    if (props.show === true && props.value.RoomSuit != "" && props.value.Bed != "" && props.value.CheckIn != "" && props.value.CheckOut != "") {
        return (
            <>
                <div className="container w-50">
                    <h5 className="bg-dark text-white text-center my-4">Availible Suit</h5>
                </div>
                <div className="container ">
                    <div className="container d-flex flex-wrap">
                        {
                            RoomApi.map((data, index) => {
                                if (data.RoomeName == props.value.RoomSuit) {
                                    return (
                                        <>
                                            <div className="card"><div className="card-body"><h6>Room Type :{data.RoomeName}</h6></div></div>
                                            <div className="card"><div className="card-body"><h6>No. of Rooms Availible :{data.Rooms}</h6></div></div>
                                        </>
                                    )
                                }
                            })
                        }
                    </div>
                    <hr />
                    <div className="" >
                        <div className="container w-50">
                            <h6 className="bg-warning text-white text-center my-4">Book Now</h6>
                        </div>
                        <form method="POST" className="d-flex flex-wrap">
                            <div className="form-group">
                                <label for="name">Enter Name<spam className="text-danger">*</spam></label>
                                <input type="text" className="form-control " id="name" aria-describedby="name"
                                    name="name"
                                    value={Data.name}
                                    onChange={handleInput}
                                    placeholder="Enter Name"
                                />
                                <small id="email" className="form-text text-danger">{errname}</small>
                            </div>
                            <div className="form-group">
                                <label for="email">Email address<spam className="text-danger">*</spam></label>
                                <input type="email" className="form-control" id="email" aria-describedby="email"
                                    name="email"
                                    value={Data.email}
                                    onChange={handleInput}
                                    placeholder="Enter email" />
                                <small id="email" className="form-text text-muted">We'll never share your email with anyone else.</small><br />
                                <small id="email" className="form-text text-danger">{erremail}</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">contact Number<spam className="text-danger">*</spam></label>
                                <input type="text" className="form-control" id="number"
                                    name="number"
                                    value={Data.number}
                                    onChange={handleInput}
                                    placeholder="Enter Number"
                                /><small id="email" className="form-text text-danger">{errNumber}</small>
                            </div>
                            <div className="form-group">
                                <label for="room">Room Type</label>
                                <input type="text" className="form-control" id="room"
                                    name="room"
                                    value={props.value.RoomSuit}
                                // onChange={(e) => { setSuit(e.targer.value) }}
                                />
                            </div>
                            <div className="form-group">
                                <label for="bed">Bed Type</label>
                                <input type="text" className="form-control" id="bed"
                                    name="bed"
                                    value={props.value.Bed}
                                // onChange={(e) => { setBed(e.targer.value) }}
                                />
                            </div>
                            <div className="form-group">
                                <label for="checkIn">Date CheckIn<spam className="text-danger">*</spam></label>
                                <input type="text" className="form-control" id="checkIn"
                                    name="checkIn"
                                    value={props.value.CheckIn}
                                // onChange={(e) => { setCheckIn(e.targer.value) }}
                                />
                            </div>
                            <div className="form-group">
                                <label for="checkOut"> Date CheckOut<spam className="text-danger">*</spam></label>
                                <input type="text" className="form-control" id="checkOut"
                                    name="checkOut"
                                    value={props.value.CheckOut}
                                // onChange={(e) => { setCheckOut(e.targer.value) }}
                                />
                            </div>
                            <button type="submit" className="btn btn-outline-success  my-4 " onClick={onSubmitForm}>Book</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <h1></h1>
        )
    }
}
export default BookingForm;